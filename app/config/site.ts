export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  company: {
    name: "Fuerza Total Gym",
    logo: "",
    tagline: "Entrena con propósito. Resultados reales, sin excusas.",
  },

  theme: {
    primaryColor: "#DC2626", // rojo intenso
    secondaryColor: "#0F172A", // casi negro azulado
    accentColor: "#F59E0B",
  },

  nav: {
    links: [
      { label: "Beneficios", href: "#features" },
      { label: "Planes", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    ctaText: "Únete ahora",
  },

  sections: {
    hero: {
      enabled: true,
      title: "Transforma tu cuerpo, transforma tu vida",
      subtitle:
        "Entrenadores certificados, equipo de primer nivel y una comunidad que te empuja a dar más.",
      ctaText: "Agenda tu clase de prueba",
      ctaHref: "#contact",
      image: "/hero-image.png",
    },

    features: {
      enabled: true,
      title: "Por qué entrenar con nosotros",
      items: [
        {
          icon: "Zap",
          title: "Entrenamiento intenso",
          description: "Rutinas diseñadas para resultados en semanas, no meses.",
        },
        {
          icon: "ShieldCheck",
          title: "Instructores certificados",
          description: "Acompañamiento profesional en cada sesión.",
        },
        {
          icon: "TrendingUp",
          title: "Seguimiento de progreso",
          description: "Mide tu avance con evaluaciones mensuales.",
        },
      ],
    },

    howItWorks: {
      enabled: false,
      title: "",
      steps: [],
    },

    testimonials: {
      enabled: true,
      title: "Nuestros miembros hablan",
      items: [
        {
          name: "Carlos Ramírez",
          role: "Miembro desde 2023",
          quote: "Bajé 15kg en 4 meses. El acompañamiento hace toda la diferencia.",
          avatar: "",
        },
      ],
    },

    pricing: {
      enabled: true,
      title: "Membresías",
      plans: [
        {
          name: "Básica",
          price: "$399",
          period: "/mes",
          features: ["Acceso a gimnasio", "Horario regular", "Casillero"],
          ctaText: "Elegir plan",
          highlighted: false,
        },
        {
          name: "Premium",
          price: "$699",
          period: "/mes",
          features: [
            "Acceso 24/7",
            "Clases grupales",
            "1 sesión personal/mes",
            "Plan nutricional",
          ],
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
          question: "¿Necesito experiencia previa?",
          answer: "No, tenemos rutinas para todos los niveles, desde principiantes.",
        },
        {
          question: "¿Puedo cancelar en cualquier momento?",
          answer: "Sí, sin penalización, con 5 días de aviso.",
        },
      ],
    },
  },

  contact: {
    email: "contacto@fuerzatotal.com",
    whatsapp: "+52 668 111 2222",
    formEnabled: true,
  },

  footer: {
    socials: [
      { platform: "Instagram", href: "https://instagram.com" },
    ],
  },
} as const;