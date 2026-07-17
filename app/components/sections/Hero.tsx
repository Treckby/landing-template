import { siteConfig } from "@/app/config/site";

export function Hero() {
  const { hero } = siteConfig.sections;
  if (!hero.enabled) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
          {hero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-600">{hero.subtitle}</p>
        <a
          href={hero.ctaHref}
          className="inline-block mt-8 px-8 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
        >
          {hero.ctaText}
        </a>
      </div>
      <div className="flex-1">
        {/* Reemplaza con Image de next/image cuando tengas la imagen real */}
        <div className="aspect-video bg-gray-100 rounded-xl" />
      </div>
    </section>
  );
}