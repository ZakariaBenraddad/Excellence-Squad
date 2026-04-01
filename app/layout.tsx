import type React from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Point Squad - Excellence éprouvée",
  description:
    "Point Squad aspire à être un partenaire privilégié pour les acteurs de l'industrie hôtelière. En excellant dans notre profession, nous vous soutenons pour exceller dans la vôtre !",
  generator: "Next.js",
  keywords: [
    "hospitality",
    "hotel",
    "cleaning",
    "maintenance",
    "Belgium",
    "hôtellerie",
  ],
  authors: [{ name: "Point Squad" }],
  creator: "Point Squad",
  publisher: "Point Squad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Ponit_Excellence_Squad.png",
    shortcut: "/Ponit_Excellence_Squad.png",
    apple: "/Ponit_Excellence_Squad.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "8cdc9e9fd50c9359",
  },
  alternates: {
    canonical: "https://pointquad.fr",
    languages: {
      fr: "/fr",
      en: "/en",
      nl: "/nl",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    alternateLocale: ["en_US", "nl_BE"],
    siteName: "Point Squad",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} antialiased dark`}
    >
      <body className="bg-black text-white">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body { background-color: #000; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
          .font-heading { font-family: var(--font-montserrat), system-ui, sans-serif; }
          .font-body { font-family: var(--font-open-sans), system-ui, sans-serif; }
          .bg-orange-gradient { background: linear-gradient(135deg, #f97316, #ea580c); }
          .text-orange-gradient { background: linear-gradient(135deg, #f97316, #ea580c); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .fluid-h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
          .fluid-h2 { font-size: clamp(1.875rem, 4vw, 3rem); }
          .animate-float-slow { animation: float 6s ease-in-out infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
