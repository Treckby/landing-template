"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { faq } = siteConfig.sections;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq.enabled) return null;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary text-center">
          {faq.title}
        </h2>

        <div className="mt-12 space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-secondary">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}