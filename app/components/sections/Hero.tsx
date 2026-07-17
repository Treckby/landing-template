import { siteConfig } from "@/app/config/site";
import Image from "next/image";

export function Hero() {
  const { hero } = siteConfig.sections;
  if (!hero.enabled) return null;

  return (
    <section className="relative overflow-hidden">
      {/* fondo con gradiente radial sutil usando el color primario */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            {siteConfig.company.name}
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold text-secondary leading-[1.05] tracking-tight">
            {hero.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            {hero.subtitle}
          </p>

          <a
            href={hero.ctaHref}
            className="inline-block mt-10 px-8 py-3.5 rounded-full bg-primary text-white font-medium shadow-[0_8px_24px_-6px_var(--color-primary)] hover:opacity-90 active:scale-95 transition"
          >
            {hero.ctaText}
          </a>
        </div>

        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-2xl bg-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rotate-2 hover:rotate-0 transition-transform duration-500">
            {hero.image && (
              <Image
                src={hero.image}
                alt={siteConfig.company.name}
                fill
                className="rounded-2xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}