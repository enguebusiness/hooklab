import AnnouncementBar from "@/components/marketing/AnnouncementBar";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import ResultsShowcase from "@/components/marketing/ResultsShowcase";
import Method from "@/components/marketing/Method";
import PersonaCards from "@/components/marketing/PersonaCards";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import Testimonials from "@/components/marketing/Testimonials";
import Pricing from "@/components/marketing/Pricing";
import TrustBadges from "@/components/marketing/TrustBadges";
import FAQ from "@/components/marketing/FAQ";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";
import SocialProofTicker from "@/components/marketing/SocialProofTicker";
import ExitIntentPopup from "@/components/marketing/ExitIntentPopup";
import StickyMobileCTA from "@/components/marketing/StickyMobileCTA";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Top announcement bar */}
      <AnnouncementBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero with SEO-optimized H1 */}
      <Hero />

      {/* Market opportunity + timeline */}
      <section id="resultats">
        <ResultsShowcase />
      </section>

      {/* 3-step method */}
      <Method />

      {/* Target personas */}
      <PersonaCards />

      {/* Comparison table */}
      <ComparisonTable />

      {/* Testimonials with disclaimer */}
      <Testimonials />

      {/* Pricing with urgency */}
      <Pricing />

      {/* Trust signals */}
      <TrustBadges />

      {/* FAQ with structured data */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Social proof notifications (bottom left) */}
      <SocialProofTicker />

      {/* Exit intent popup (desktop only) */}
      <ExitIntentPopup />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </main>
  );
}
