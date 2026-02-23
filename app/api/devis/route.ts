import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, ville, description, projectType } = body as {
      name?: string;
      phone?: string;
      ville?: string;
      description?: string;
      projectType?: string;
    };

    if (!name || !phone || !ville || !projectType) {
      return NextResponse.json(
        { error: "Les champs nom, téléphone, ville et type de projet sont requis." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Service email non configuré." },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "HookLab <onboarding@resend.dev>";
    const adminEmail = process.env.ADMIN_EMAIL || fromEmail;

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `Nouvelle demande de devis - ${projectType} (${ville})`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e4e4e7;">
      <h2 style="margin:0 0 24px 0;color:#111827;font-size:20px;">Nouvelle demande de devis maçonnerie</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;width:40%;">Nom</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Téléphone</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:600;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;">Type de projet</td>
          <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:600;">${projectType}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;${description ? "border-bottom:1px solid #f3f4f6;" : ""}color:#6b7280;font-size:14px;">Ville</td>
          <td style="padding:10px 0;${description ? "border-bottom:1px solid #f3f4f6;" : ""}color:#111827;font-size:14px;font-weight:600;">${ville}</td>
        </tr>
        ${
          description
            ? `<tr>
          <td style="padding:10px 0;vertical-align:top;color:#6b7280;font-size:14px;">Description</td>
          <td style="padding:10px 0;color:#111827;font-size:14px;">${description}</td>
        </tr>`
            : ""
        }
      </table>
      <p style="margin:24px 0 0 0;color:#6b7280;font-size:13px;">Reçu le ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erreur API devis:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
