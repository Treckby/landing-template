# Landing Page Template — Guía rápida

Template reutilizable de landing pages construido con **Next.js + Tailwind CSS v4 + Supabase**.
Diseñado para reconfigurarse por cliente editando **un solo archivo**: `src/config/site.ts`.

---

## Stack

- Next.js (App Router)
- Tailwind CSS v4 (theming vía `@theme` en `globals.css`)
- Supabase (formulario de leads)
- lucide-react (íconos)
- next/font (Space Grotesk + Inter)

---

## Estructura del proyecto

```
/src
  /app
    layout.tsx          → fonts + inyecta el theme (colores) del cliente
    page.tsx             → ensambla las secciones en orden
    globals.css           → colores/fuentes por defecto (fallback)
  /components
    /sections             → Header, Hero, Features, Testimonials, Pricing, FAQ, Footer
    /ui                    → Icon.tsx (mapa de íconos usados en siteConfig)
  /config
    site.ts               → ★ ÚNICO archivo que cambia por cliente ★
  /lib
    supabase.ts            → cliente de Supabase (cuando se conecte)
```

---

## Cómo crear una landing para un cliente nuevo

1. **Duplica la config actual como respaldo** (opcional pero recomendado):
   ```bash
   cp src/config/site.ts src/config/site.[nombre-cliente].ts
   ```

2. **Edita `src/config/site.ts`** con los datos del nuevo cliente:
   - `company` → nombre, logo, tagline
   - `theme` → 3 colores (`primaryColor`, `secondaryColor`, `accentColor`)
   - `sections` → activa/desactiva secciones con `enabled: true/false` y llena textos, features, testimonios, planes y preguntas frecuentes
   - `contact` → email, WhatsApp

   **No es necesario tocar ningún componente ni `globals.css`.** El color se propaga automáticamente vía `layout.tsx`.

3. **Reemplaza las imágenes** en `/public`:
   - `logo.png`
   - `hero-image.png`
   - Avatares de testimonios (si aplica)

4. **Prueba localmente:**
   ```bash
   npm run dev
   ```
   Revisa `localhost:3000` completo, incluyendo mobile (herramientas de desarrollador → toggle device).

5. **Build de producción para verificar que no hay errores:**
   ```bash
   npm run build
   ```

6. **Deploy** (recomendado Vercel — gratis y con dominio automático):
   ```bash
   npx vercel
   ```
   O conecta el repo de GitHub directamente desde vercel.com.

---

## Activar/desactivar secciones

Cada sección en `siteConfig.sections` tiene su propio `enabled: true/false`.
Ejemplo: si el cliente no necesita "Cómo funciona":

```ts
howItWorks: {
  enabled: false,
  ...
}
```

El componente correspondiente se auto-oculta sin necesidad de borrar código.

---

## Notas importantes

- **Colores:** se definen solo en `siteConfig.theme`. Nunca edites los colores directamente en `globals.css` — ese archivo solo tiene valores de respaldo.
- **Íconos:** si usas un ícono nuevo de `lucide-react` en `features.items`, agrégalo también al mapa en `src/components/ui/Icon.tsx`, o no se renderizará.
- **Formulario de contacto:** actualmente el `onSubmit` del Footer tiene un placeholder. Para producción, conectar con Supabase (tabla sugerida: `leads` con columnas `name, email, message, source, created_at`).
- **Fuentes:** cambiar la pareja tipográfica (actualmente Space Grotesk + Inter) se hace en `src/app/layout.tsx`, importando otra fuente de `next/font/google`.

---

## Checklist antes de entregar a un cliente

- [ ] `siteConfig.ts` completo (sin textos de ejemplo tipo "Acme Studio")
- [ ] Imágenes reales en `/public` (logo, hero, avatares)
- [ ] Favicon y `og:image` actualizados
- [ ] Formulario conectado a Supabase (o a donde el cliente reciba los leads)
- [ ] Probado en mobile
- [ ] `npm run build` sin errores
- [ ] Deploy funcionando en Vercel con dominio propio o subdominio de Vercel
