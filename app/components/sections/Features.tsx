import { siteConfig } from "@/app/config/site";
import { Icon } from "@/app/components/ui/Icon";
import { Reveal } from "@/app/components/ui/Reveal";

export function Features() {
  const { features } = siteConfig.sections;
  if (!features.enabled) return null;

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">
        {features.title}
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.items.map((item, i) => (
          <Reveal key={i} delay={i * 100}>
          <div
            key={i}
            className="h-full p-8 rounded-2xl ring-1 ring-black/5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name={item.icon} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-secondary">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600">{item.description}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}