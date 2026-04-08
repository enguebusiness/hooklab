import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Arleux (59) | HookLab",
  description:
    "Création de sites internet pour artisans à Arleux et environs. Visibilité Google, site ultra-rapide, système de confiance. Audit gratuit.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Arleux"
      villeSlug="arleux"
      codePostal="59151"
      voisines={["Douai", "Orchies", "Flines-lez-Raches"]}
    />
  );
}
