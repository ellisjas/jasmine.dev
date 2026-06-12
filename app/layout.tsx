import type { Metadata } from "next";
import { Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { siteName, siteTitle, siteDescription, siteUrl } from "@/app/lib/site";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteTitle,
      template: "%s · Jasmine Ellis",
    },
    description: siteDescription,
    alternates: {
      canonical: "/",
    },
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName,
      title: siteTitle,
      description: siteDescription,
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
    },
  };
}

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ibm_plex_sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm-sans",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Web Developer",
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  sameAs: ["https://github.com/ellisjas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${roboto.className} ${ibm_plex_sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
