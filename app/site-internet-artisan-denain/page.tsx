import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Denain (59) | HookLab",
  description:
    "Sites web professionnels pour artisans du bâtiment à Denain. Maçon, couvreur, plombier, paysagiste. SEO local + audit offert.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Denain"
      villeSlug="denain"
      codePostal="59220"
      voisines={["Valenciennes", "Douai", "Saint-Amand-les-Eaux"]}
    />
  );
}
