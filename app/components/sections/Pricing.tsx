import { siteConfig } from "@/app/config/site";
import { Check } from "lucide-react";

export function Pricing() {
  const { pricing } = siteConfig.sections;
  if (!pricing.enabled) return null;

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">
          {pricing.title}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border ${
                plan.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                  Más popular
                </span>
              )}
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-secondary">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? "bg-primary text-white hover:opacity-90"
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}