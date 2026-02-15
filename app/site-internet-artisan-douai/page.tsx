import type { Metadata } from "next";
import LocalSeoPage from "@/components/marketing/LocalSeoPage";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Douai (59) | HookLab",
  description:
    "Spécialiste création de sites web pour artisans du bâtiment à Douai et environs. Couvreur, maçon, paysagiste, plombier. Audit gratuit.",
};

export default function Page() {
  return (
    <LocalSeoPage
      ville="Douai"
      villeSlug="douai"
      codePostal="59500"
      voisines={["Orchies", "Arleux", "Flines-lez-Raches"]}
    />
  );
}
