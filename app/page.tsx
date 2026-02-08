import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Testimonials from "@/components/marketing/Testimonials";
import PersonaCards from "@/components/marketing/PersonaCards";
import Method from "@/components/marketing/Method";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <PersonaCards />
      <Method />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
