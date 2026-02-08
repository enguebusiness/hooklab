import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import type { CandidatureInsert } from "@/types/database.types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation des champs requis
    const requiredFields: (keyof CandidatureInsert)[] = [
      "email",
      "firstname",
      "phone",
      "persona",
      "age",
      "experience",
      "time_daily",
      "availability",
      "start_date",
      "motivation",
      "monthly_goal",
      "biggest_fear",
    ];

    for (const field of requiredFields) {
      if (!body[field] && body[field] !== 0) {
        return NextResponse.json(
          { error: `Le champ "${field}" est requis.` },
          { status: 400 }
        );
      }
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    // Validation age
    if (body.age < 18 || body.age > 65) {
      return NextResponse.json(
        { error: "L'age doit etre entre 18 et 65 ans." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Vérifier si une candidature existe déjà avec cet email
    const { data: existing } = await supabase
      .from("candidatures")
      .select("id")
      .eq("email", body.email)
      .single() as { data: { id: string } | null };

    if (existing) {
      return NextResponse.json(
        { error: "Une candidature avec cet email existe deja." },
        { status: 409 }
      );
    }

    // Insérer la candidature
    const candidature: CandidatureInsert = {
      email: body.email,
      firstname: body.firstname,
      phone: body.phone,
      persona: body.persona,
      age: body.age,
      experience: body.experience,
      time_daily: body.time_daily,
      availability: body.availability,
      start_date: body.start_date,
      motivation: body.motivation,
      monthly_goal: body.monthly_goal,
      biggest_fear: body.biggest_fear,
      tiktok_username: body.tiktok_username || null,
    };

    const { error: insertError } = await supabase
      .from("candidatures")
      .insert(candidature as never);

    if (insertError) {
      console.error("Erreur insertion candidature:", insertError);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement de la candidature." },
        { status: 500 }
      );
    }

    // Envoi email de confirmation (Resend)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your-api-key") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "HookLab <noreply@hooklab.fr>",
          to: body.email,
          subject: "Candidature HookLab recue !",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #6D5EF6;">Candidature recue !</h1>
              <p>Salut ${body.firstname},</p>
              <p>Merci pour ta candidature au programme HookLab !</p>
              <p>Notre equipe va etudier ton profil et te repondre sous <strong>24 heures</strong>.</p>
              <p>A tres vite,<br/>L'equipe HookLab</p>
            </div>
          `,
        });
      } catch (emailError) {
        // Log l'erreur mais ne bloque pas la candidature
        console.error("Erreur envoi email:", emailError);
      }
    }

    return NextResponse.json(
      { message: "Candidature enregistree avec succes." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez reessayer." },
      { status: 500 }
    );
  }
}
