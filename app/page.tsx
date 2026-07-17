import { Header } from "@/app/components/sections/Header";
import { Hero } from "@/app/components/sections/Hero";
import { TrustBar } from "@/app/components/sections/TrustBar";
import { Features } from "@/app/components/sections/Features";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Pricing } from "@/app/components/sections/Pricing";
import { FAQ } from "@/app/components/sections/FAQ";
import { Footer } from "@/app/components/sections/Footer";
import { StickyCTA } from "@/app/components/ui/StickyCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}