"use client";

import { siteConfig } from "@/app/config/site";

export function Footer() {
  const { company, contact, footer } = siteConfig;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a Supabase más adelante
    alert("Formulario listo — falta conectar a Supabase");
  }

  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info de contacto */}
        <div>
          <h3 className="text-2xl font-bold">{company.name}</h3>
          <p className="mt-3 text-gray-300">{company.tagline}</p>

          <div className="mt-6 space-y-2 text-gray-300 text-sm">
            <p>Email: {contact.email}</p>
            <p>WhatsApp: {contact.whatsapp}</p>
          </div>

          {footer.socials.length > 0 && (
            <div className="mt-6 flex gap-4">
              {footer.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Formulario */}
        {contact.formEnabled && (
          <div>
            <h4 className="text-lg font-semibold">Contáctanos</h4>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}