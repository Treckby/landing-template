import { siteConfig } from "@/app/config/site";
import Image from "next/image";

export function TrustBar() {
  const { trustBar } = siteConfig.sections;
  if (!trustBar.enabled || !trustBar.logos.length) return null;

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wide">
          {trustBar.label}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustBar.logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}