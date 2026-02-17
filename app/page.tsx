import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Problematique from "@/components/marketing/Problematique";
import Process from "@/components/marketing/Process";
import DemosLive from "@/components/marketing/DemosLive";
import AboutMe from "@/components/marketing/AboutMe";
import FAQ from "@/components/marketing/FAQ";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import { getSiteImages } from "@/lib/site-images";

// Revalider les images toutes les 60 secondes
export const revalidate = 60;

export default async function LandingPage() {
  const images = await getSiteImages();

  return (
    <main id="main-content" className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero - Le Choc Visuel */}
      <Hero images={images} />

      {/* La Problématique - L'Identification */}
      <Problematique />

      {/* Le Triptyque HookLab - Les 3 Piliers */}
      <Process images={images} />

      {/* Démos Live - 3 Dossiers de Confiance */}
      <DemosLive images={images} />

      {/* Qui suis-je - Ancrage Local */}
      <AboutMe images={images} />

      {/* FAQ - Objections */}
      <FAQ />

      {/* Contact / Audit CTA */}
      <Contact />

      {/* Footer SEO */}
      <Footer />
    </main>
  );
}
