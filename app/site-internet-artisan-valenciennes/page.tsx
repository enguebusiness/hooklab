import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Valenciennes (59) | HookLab",
  description:
    "Sites web pour artisans du bâtiment à Valenciennes et Valenciennois. Technologie ultra-rapide, SEO local, résultats concrets. Audit gratuit.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Valenciennes"
      villeSlug="valenciennes"
      codePostal="59300"
      voisines={["Denain", "Saint-Amand-les-Eaux", "Douai"]}
    />
  );
}
