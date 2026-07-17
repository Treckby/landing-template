import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

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
        className={`${spaceGrotesk.variable} ${inter.variable} font-body`}
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