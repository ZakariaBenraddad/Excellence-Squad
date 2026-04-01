import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getDict, type Locale } from "@/lib/i18n";
import HtmlLang from "@/components/html-lang";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f97316",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params as { lang: Locale };
  const dict = getDict(lang);

  const baseUrl = "https://pointsquad.eu";
  const currentUrl = `${baseUrl}/${lang}`;

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    icons: {
      icon: "/Ponit_Excellence_Squad.png",
      apple: "/Ponit_Excellence_Squad.png",
    },
    keywords: "hospitality, hotels, Belgium, cleaning, maintenance",
    authors: [{ name: "Point Squad" }],
    creator: "Point Squad",
    publisher: "Point Squad",
    alternates: {
      canonical: currentUrl,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        nl: `${baseUrl}/nl`,
      },
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: currentUrl,
      siteName: "Point Squad",
      images: [
        {
          url: `${baseUrl}/redGuy2.jpg`,
          width: 1200,
          height: 630,
          alt: dict.seo.title,
        },
      ],
      locale: lang === "fr" ? "fr_BE" : lang === "en" ? "en_US" : "nl_BE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: [`${baseUrl}/redGuy2.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "o6WH6nzQTfqPCUCGAQhTb9qUfY8lh1ptHyFIE3mGR8o",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDict(lang as Locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Point Squad",
    description: dict.seo.description,
    url: `https://pointsquad.eu/${lang}`,
    logo: "https://pointsquad.eu/Ds.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+32-479-63-36-40",
      contactType: "customer service",
      availableLanguage: ["French", "English", "Dutch"],
    },
    sameAs: ["https://www.linkedin.com/company/excellence-squad"],
    serviceArea: {
      "@type": "Country",
      name: "Belgium",
    },
  };

  return (
    <>
      <HtmlLang lang={lang} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
      <Analytics />
    </>
  );
}
