import { siteConfig } from "@/app/config/site";
import Image from "next/image";

export function Testimonials() {
  const { testimonials } = siteConfig.sections;
  if (!testimonials.enabled) return null;

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className=" font-display text-3xl md:text-4xl font-bold text-secondary text-center">
          {testimonials.title}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl ring-1 ring-black/5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow">
              <p className="text-gray-600 italic">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                {item.avatar && (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-secondary text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}