import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import System from "@/components/marketing/System";
import Portfolio from "@/components/marketing/Portfolio";
import AboutMe from "@/components/marketing/AboutMe";
import FAQ from "@/components/marketing/FAQ";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import { getPortfolio, getSiteSettings } from "@/lib/sanity/queries";

// Revalider les données Sanity toutes les 60 secondes
export const revalidate = 60;

export default async function LandingPage() {
  const [portfolioItems, siteSettings] = await Promise.all([
    getPortfolio(),
    getSiteSettings(),
  ]);

  return (
    <main id="main-content" className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero - La Promesse */}
      <Hero />

      {/* Le Système - Dossier de Confiance */}
      <System />

      {/* Portfolio - Preuves */}
      <Portfolio items={portfolioItems} />

      {/* Qui suis-je - Ancrage Local */}
      <AboutMe settings={siteSettings} />

      {/* FAQ */}
      <FAQ />

      {/* Contact / Audit CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
