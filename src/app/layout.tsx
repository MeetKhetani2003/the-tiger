import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Maa Shiva Services Pvt. Ltd. | Premium Enterprise Protection",
  description: "Providing world-class security personnel, surveillance support, and facility management for corporate, industrial, and residential sectors across India.",
  keywords: "Security Guard Services, Security Services Company, Corporate Security Services, Industrial Security Services, Facility Management Services, Professional Security Services",
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
              "@type": "SecurityService",
              "name": "Maa Shiva Services Pvt. Ltd.",
              "url": "https://maashivaservices.com",
              "logo": "https://maashivaservices.com/logo.png",
              "description": "Providing world-class security personnel, surveillance support, and facility management across India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Railway Station, 277, Exchange Modha, Shakti Vihar Colony",
                "addressLocality": "Faizabad",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN",
                "postalCode": "224001"
              },
              "telephone": "+919415610453",
              "email": "info@maashivaservices.com",
              "priceRange": "$$",
              "areaServed": "India"
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
