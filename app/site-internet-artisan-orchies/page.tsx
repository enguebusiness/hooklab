import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Orchies (59) | HookLab",
  description:
    "Création de sites web professionnels pour artisans à Orchies. Couvreur, maçon, paysagiste. Site rapide + SEO local. Audit offert.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Orchies"
      villeSlug="orchies"
      codePostal="59310"
      voisines={["Douai", "Flines-lez-Raches", "Saint-Amand-les-Eaux"]}
    />
  );
}
