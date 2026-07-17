import { siteConfig } from "@/app/config/site";

export function StickyCTA() {
  const { nav } = siteConfig;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
      <a
        href="#contact"
        className="block text-center py-3.5 rounded-full bg-primary text-white font-medium shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] active:scale-95 transition"
      >
        {nav.ctaText}
      </a>
    </div>
  );
}