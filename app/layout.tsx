import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/app/config/site";

export const metadata: Metadata = {
  title: siteConfig.company.name,
  description: siteConfig.company.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = siteConfig;

  return (
    <html lang="es">
      <body
        style={
          {
            "--color-primary": theme.primaryColor,
            "--color-secondary": theme.secondaryColor,
            "--color-accent": theme.accentColor,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}