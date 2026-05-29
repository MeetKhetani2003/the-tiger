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
  keywords: ["Top Security Agency in India", "Best Security Guard Services in India", "Bouncer Services India", "Commando Security India", "Corporate Security Services", "Industrial Security Services", "Event Security Guards", "VIP Protection Services India", "Facility Management Services", "Professional Security Company", "Armed Security Guards India"],
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
                "name": "Security Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Security Guard Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bouncer Security Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commando Security Services"
                    }
                  }
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
