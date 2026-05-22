import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oakvalleycurbing.com"),
  title: "Oak Valley Curbing — Decorative Concrete Landscape Curbing | Wadena, MN",
  description:
    "Custom stamped concrete landscape curbing serving Wadena, Perham, Detroit Lakes, Park Rapids & the Minnesota lakes. Permanent borders that define beds, protect landscaping, and boost curb appeal. Free on-site quotes from Dan Butzin.",
  keywords: [
    "concrete curbing",
    "landscape curbing",
    "decorative curbing",
    "Wadena MN curbing",
    "Minnesota concrete edging",
    "Park Rapids curbing",
    "Detroit Lakes curbing",
    "Perham curbing",
    "stamped concrete edging",
    "flower bed borders",
  ],
  alternates: { canonical: "https://oakvalleycurbing.com/" },
  openGraph: {
    title: "Oak Valley Curbing — Decorative Concrete Landscape Curbing",
    description:
      "Custom stamped concrete landscape curbing for Minnesota lakes country.",
    type: "website",
    locale: "en_US",
    url: "https://oakvalleycurbing.com/",
    siteName: "Oak Valley Curbing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oak Valley Curbing — decorative concrete landscape curbing in Wadena, MN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak Valley Curbing",
    description:
      "Decorative concrete landscape curbing serving the Minnesota lakes. Wadena, MN.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://oakvalleycurbing.com/#business",
              name: "Oak Valley Curbing",
              description:
                "Custom decorative concrete landscape curbing serving Wadena and surrounding Minnesota lakes country.",
              telephone: "+1-218-539-0694",
              email: "dan@oakvalleycurbing.com",
              url: "https://oakvalleycurbing.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "61257 Leaf River Rd",
                addressLocality: "Wadena",
                addressRegion: "MN",
                addressCountry: "US",
              },
              areaServed: [
                "Wadena, MN",
                "Sebeka, MN",
                "Menahga, MN",
                "Perham, MN",
                "Frazee, MN",
                "Detroit Lakes, MN",
                "Park Rapids, MN",
                "Pelican Rapids, MN",
              ],
              priceRange: "$$",
              sameAs: ["https://www.facebook.com/profile.php?id=61577341783607"],
              founder: { "@type": "Person", name: "Dan Butzin" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-218-539-0694",
                contactType: "sales",
                areaServed: "US-MN",
                availableLanguage: "English",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
