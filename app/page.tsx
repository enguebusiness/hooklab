import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Problematique from "@/components/marketing/Problematique";
import System from "@/components/marketing/System";
import DemosLive from "@/components/marketing/DemosLive";
import AboutMe from "@/components/marketing/AboutMe";
import FAQ from "@/components/marketing/FAQ";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import { getSiteSettings } from "@/lib/sanity/queries";

// Revalider les données Sanity toutes les 60 secondes
export const revalidate = 60;

export default async function LandingPage() {
  const siteSettings = await getSiteSettings();

  return (
    <main id="main-content" className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero - Le Choc Visuel */}
      <Hero />

      {/* La Problématique - L'Identification */}
      <Problematique />

      {/* La Solution HookLab Tech */}
      <System />

      {/* Démos Live - 3 Dossiers de Confiance */}
      <DemosLive />

      {/* Qui suis-je - Ancrage Local (Sanity) */}
      <AboutMe settings={siteSettings} />

      {/* FAQ - Objections */}
      <FAQ />

      {/* Contact / Audit CTA */}
      <Contact />

      {/* Footer SEO */}
      <Footer />
    </main>
  );
}
