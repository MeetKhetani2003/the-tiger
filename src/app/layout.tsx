import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Maha Shiva Security Services | Premium Enterprise Protection",
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
              "name": "Maha Shiva Security Services Pvt. Ltd.",
              "url": "https://mahashivasecurity.com",
              "logo": "https://mahashivasecurity.com/logo.png",
              "description": "Providing world-class security personnel, surveillance support, and facility management across India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Enterprise Sector, Business District",
                "addressLocality": "New Delhi",
                "addressCountry": "IN",
                "postalCode": "110001"
              },
              "telephone": "+919876543210",
              "email": "info@mahashivasecurity.com",
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
