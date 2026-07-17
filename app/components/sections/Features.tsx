import { siteConfig } from "@/app/config/site";
import { Icon } from "@/app/components/ui/Icon";

export function Features() {
  const { features } = siteConfig.sections;
  if (!features.enabled) return null;

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">
        {features.title}
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.items.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border border-gray-100 hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name={item.icon} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-secondary">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}