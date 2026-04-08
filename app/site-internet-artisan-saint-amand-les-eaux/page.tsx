import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Saint-Amand-les-Eaux (59) | HookLab",
  description:
    "Votre site web professionnel d'artisan à Saint-Amand-les-Eaux. Couvreur, plombier, paysagiste. Conçu pour générer des chantiers. Audit offert.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Saint-Amand-les-Eaux"
      villeSlug="saint-amand-les-eaux"
      codePostal="59230"
      voisines={["Valenciennes", "Orchies", "Denain"]}
    />
  );
}
