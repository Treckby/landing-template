export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  company: {
    name: "Acme Studio",
    logo: "/logo.png", // ponla en /public
    tagline: "Diseño y desarrollo web para negocios que quieren crecer",
  },

  theme: {
    primaryColor: "#0066FF",
    secondaryColor: "#111827",
    accentColor: "#FFB800",
  },

  nav: {
    links: [
      { label: "Beneficios", href: "#features" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    ctaText: "Empezar ahora",
  },

  sections: {
    hero: {
      enabled: true,
      title: "Lleva tu negocio al siguiente nivel",
      subtitle:
        "Creamos experiencias digitales que convierten visitantes en clientes.",
      ctaText: "Solicita tu cotización",
      ctaHref: "#contact",
      image: "/hero-image.png",
    },

    features: {
      enabled: true,
      title: "Por qué elegirnos",
      items: [
        {
          icon: "Zap",
          title: "Rápido",
          description: "Entregas en tiempo récord sin sacrificar calidad.",
        },
        {
          icon: "ShieldCheck",
          title: "Confiable",
          description: "Procesos probados y soporte continuo.",
        },
        {
          icon: "TrendingUp",
          title: "Resultados",
          description: "Enfocados en métricas que le importan a tu negocio.",
        },
      ],
    },

    howItWorks: {
      enabled: false, // actívalo solo si el cliente lo necesita
      title: "Cómo funciona",
      steps: [
        { number: "1", title: "Agenda una llamada", description: "..." },
        { number: "2", title: "Definimos el plan", description: "..." },
        { number: "3", title: "Lanzamos", description: "..." },
      ],
    },

    testimonials: {
      enabled: true,
      title: "Lo que dicen nuestros clientes",
      items: [
        {
          name: "María López",
          role: "CEO, Empresa X",
          quote: "Superaron nuestras expectativas por completo.",
          avatar: "/avatars/maria.jpg",
        },
      ],
    },

    pricing: {
      enabled: true,
      title: "Planes",
      plans: [
        {
          name: "Básico",
          price: "$499",
          period: "único pago",
          features: ["Landing page", "1 revisión", "Entrega en 5 días"],
          ctaText: "Elegir plan",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "$899",
          period: "único pago",
          features: ["Landing page", "3 revisiones", "SEO básico", "Formulario"],
          ctaText: "Elegir plan",
          highlighted: true,
        },
      ],
    },

    faq: {
      enabled: true,
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Cuánto tarda la entrega?",
          answer: "Entre 5 y 10 días hábiles dependiendo del plan.",
        },
      ],
    },
  },

  contact: {
    email: "contacto@acmestudio.com",
    whatsapp: "+52 668 000 0000",
    formEnabled: true,
  },

  footer: {
    socials: [
      { platform: "Instagram", href: "https://instagram.com" },
      { platform: "Facebook", href: "https://facebook.com" },
    ],
  },
} as const;