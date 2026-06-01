import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Maa Shiva Services Pvt. Ltd. | Top Security Agency in India",
    default: "Maa Shiva Services Pvt. Ltd. | Premium Enterprise & Security Guard Services in India",
  },
  description: "Providing world-class security personnel, bouncer services, commando security, surveillance support, and facility management for corporate, industrial, and residential sectors across India.",
  keywords: ["Top Security Agency in India", "Best Security Guard Services in India", "Armed Security Guards India", "Unarmed Security Guards", "Mobile Patrol Security", "Residential Security Services", "Corporate Security Services", "Event Security Guards", "Retail Security Guards", "Government Security Guards", "Hospital Security Guards", "Construction Site Security Guards", "Executive Protection", "VIP Protection Services India", "Fire Watch Security Guards", "Industrial Security Services", "School Security Guards", "Transportation Security Guards", "Bouncer Services India", "Commando Security India", "Facility Management Services", "Professional Security Company"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maashivaservices.com",
    siteName: "Maa Shiva Services Pvt. Ltd.",
    images: [{ url: "https://maashivaservices.com/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SecurityService", "LocalBusiness", "Organization"],
              "name": "Maa Shiva Services Pvt. Ltd.",
              "alternateName": "Maa Shiva Security",
              "url": "https://maashivaservices.com",
              "logo": "https://maashivaservices.com/logo.png",
              "image": "https://maashivaservices.com/logo.png",
              "description": "Providing world-class security personnel, bouncer services, commando security, and facility management across India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Railway Station, 277, Exchange Modha, Shakti Vihar Colony",
                "addressLocality": "Faizabad",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN",
                "postalCode": "224001"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.7730",
                "longitude": "82.1444"
              },
              "telephone": "+919415610453",
              "email": "info@maashivaservices.com",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "15 Types of Security Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Armed Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unarmed Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Patrol Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Site Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Protection Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Watch Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "School Security Guards" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transportation Security Guards" } }
                ]
              }
            }),
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
