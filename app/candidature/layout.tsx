import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidature Formation HookLab",
  description:
    "Postulez à la formation HookLab pour apprendre à créer des sites web professionnels pour artisans du bâtiment. Formation complète et accompagnement personnalisé.",
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
