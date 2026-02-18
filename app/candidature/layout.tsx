import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidature HookLab",
  description:
    "Rejoignez HookLab et apprenez \u00e0 cr\u00e9er des sites web professionnels pour artisans du b\u00e2timent. Accompagnement personnalis\u00e9.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://hooklab.eu/candidature",
  },
};

export default function CandidatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
