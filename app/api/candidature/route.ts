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

    // Validation âge
    if (body.age < 18 || body.age > 65) {
      return NextResponse.json(
        { error: "L'âge doit être entre 18 et 65 ans." },
        { status: 400 }
      );
    }

    // Vérifier que les variables d'environnement Supabase sont configurées
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Variables Supabase manquantes:", {
        url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        serviceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      });
      return NextResponse.json(
        { error: "Configuration serveur incomplète. Contactez l'administrateur." },
        { status: 500 }
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
        { error: "Une candidature avec cet email existe déjà." },
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
      console.error("Erreur insertion candidature:", JSON.stringify(insertError));
      return NextResponse.json(
        { error: `Erreur base de données : ${insertError.message}` },
        { status: 500 }
      );
    }

    // Envoi emails (Resend)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your-api-key") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "HookLab <onboarding@resend.dev>";

      // Email de confirmation au candidat
      try {
        await resend.emails.send({
          from: fromEmail,
          to: body.email,
          subject: "Candidature HookLab reçue !",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #6D5EF6;">Candidature reçue !</h1>
              <p>Salut ${body.firstname},</p>
              <p>Merci pour ta candidature au programme HookLab !</p>
              <p>Notre équipe va étudier ton profil et te répondre sous <strong>24 heures</strong>.</p>
              <p>À très vite,<br/>L'équipe HookLab</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Erreur envoi email candidat:", emailError);
      }

      // Notification admin
      const adminEmail = process.env.ADMIN_EMAIL || "enguerrandbusiness@outlook.com";
      try {
        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `Nouvelle candidature - ${body.firstname} (${body.persona})`,
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e4e4e7;">
      <h2 style="margin:0 0 8px 0;color:#111827;font-size:20px;">Nouvelle candidature HookLab</h2>
      <p style="margin:0 0 24px 0;color:#6b7280;font-size:14px;">À traiter dans les 24h</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:45%;">Prénom</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;font-weight:600;">${body.firstname}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;font-weight:600;">${body.email}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Téléphone</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;font-weight:600;">${body.phone}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Âge</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;">${body.age} ans</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Profil</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;">${body.persona}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Expérience</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;">${body.experience}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Temps / jour</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;">${body.time_daily}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">Objectif mensuel</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px;">${body.monthly_goal}</td></tr>
        <tr><td style="padding:8px 0;vertical-align:top;color:#6b7280;font-size:13px;">Motivation</td><td style="padding:8px 0;color:#111827;font-size:13px;">${body.motivation}</td></tr>
      </table>
      <a href="${process.env.NEXT_PUBLIC_APP_URL || ""}/admin/candidatures" style="display:inline-block;margin-top:24px;background:#6D5EF6;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;">Voir dans l'admin</a>
    </div>
  </div>
</body>
</html>
          `,
        });
      } catch (emailError) {
        console.error("Erreur envoi email admin:", emailError);
      }
    }

    return NextResponse.json(
      { message: "Candidature enregistrée avec succès." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Erreur serveur candidature:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
