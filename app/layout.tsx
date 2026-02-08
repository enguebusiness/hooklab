import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HookLab | Programme coaching TikTok Shop 8 semaines",
  description:
    "Rejoins HookLab et lance ton business TikTok Shop en 8 semaines. Programme de coaching complet pour créateurs affiliés.",
  keywords: [
    "TikTok Shop",
    "coaching",
    "affiliation",
    "créateur",
    "formation",
  ],
  openGraph: {
    title: "HookLab | Programme coaching TikTok Shop",
    description:
      "Lance ton business TikTok Shop en 8 semaines avec notre programme de coaching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
