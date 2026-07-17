import { Header } from "@/app/components/sections/Header";
import { Hero } from "@/app/components/sections/Hero";
import { Features } from "@/app/components/sections/Features";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Pricing } from "@/app/components/sections/Pricing";
import { FAQ } from "@/app/components/sections/FAQ";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}