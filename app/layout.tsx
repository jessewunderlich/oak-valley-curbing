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
  title: "Oak Valley Curbing — Decorative Concrete Landscape Curbing | Otter Tail County, MN",
  description:
    "Custom stamped concrete landscape curbing for Minnesota lakes country. Permanent borders that define your beds, protect landscaping, and boost curb appeal. Serving Frazee, Detroit Lakes, Perham & surrounding Otter Tail County.",
  keywords: [
    "concrete curbing",
    "landscape curbing",
    "decorative curbing",
    "Minnesota curbing",
    "Wadena MN",
    "Park Rapids",
    "Frazee",
    "Detroit Lakes",
    "Perham",
    "stamped concrete edging",
    "flower bed borders",
  ],
  openGraph: {
    title: "Oak Valley Curbing — Decorative Concrete Landscape Curbing",
    description:
      "Custom stamped concrete landscape curbing for Minnesota lakes country.",
    type: "website",
    locale: "en_US",
  },
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
                "Custom decorative concrete landscape curbing serving Wadena, Otter Tail County, and surrounding Minnesota lakes country.",
              telephone: "+1-218-539-0694",
              email: "oakvalleycurbing@gmail.com",
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
              sameAs: ["https://www.facebook.com/oakvalleycurbing"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
