import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";

export const runtime = "nodejs";

// POST /api/admin/candidatures/[id]/reject - Rejeter une candidature
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const supabase = createAdminClient();

  // Récupérer les infos du candidat avant de rejeter
  const { data: candidature } = await supabase
    .from("candidatures")
    .select("firstname, email")
    .eq("id", id)
    .single() as { data: { firstname: string; email: string } | null };

  const { error } = await supabase
    .from("candidatures")
    .update({ status: "rejected" } as never)
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Email de rejet au candidat
  if (candidature && process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "HookLab <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: candidature.email,
        subject: "Résultat de ta candidature HookLab",
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#0B0F19;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;background:linear-gradient(135deg,#6D5EF6,#9D8FF9);width:48px;height:48px;border-radius:12px;line-height:48px;color:#fff;font-weight:800;font-size:20px;">H</div>
      <span style="display:inline-block;vertical-align:top;margin-left:10px;line-height:48px;font-size:24px;font-weight:800;color:#ffffff;">Hook<span style="color:#6D5EF6;">Lab</span></span>
    </div>
    <div style="background:#1A1F2E;border:1px solid #2A2F3F;border-radius:20px;padding:40px 32px;">
      <h1 style="color:#ffffff;font-size:22px;margin:0 0 16px 0;">Salut ${candidature.firstname},</h1>
      <p style="color:#ffffffcc;font-size:15px;line-height:1.6;margin:0 0 16px 0;">
        Merci d'avoir pris le temps de candidater au programme HookLab.
      </p>
      <p style="color:#ffffffcc;font-size:15px;line-height:1.6;margin:0 0 16px 0;">
        Après étude de ton dossier, nous ne pouvons pas retenir ta candidature pour le moment.
        Le programme est très sélectif et nous cherchons des profils très spécifiques.
      </p>
      <p style="color:#ffffffcc;font-size:15px;line-height:1.6;margin:0 0 0 0;">
        Nous te souhaitons le meilleur dans ta progression. N'hésite pas à recandidater dans quelques mois si ta situation évolue.
      </p>
    </div>
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#ffffff40;font-size:12px;margin:0;">HookLab - Programme TikTok Shop</p>
    </div>
  </div>
</body>
</html>
        `,
      });
    } catch (emailError) {
      console.error("Erreur envoi email rejet:", emailError);
    }
  }

  return NextResponse.json({ success: true, message: "Candidature rejetée." });
}
