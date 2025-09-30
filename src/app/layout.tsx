import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "دار البخور - عبقٌ يبدأ من الدار",
    template: "%s | دار البخور"
  },
  description: "متجر البخور العربي الأصيل - أجود أنواع البخور والعود والمسك والمسك الطبيعي. منتجات عطرية فاخرة من الكويت مع توصيل مجاني.",
  keywords: [
    "بخور",
    "عود",
    "مسك",
    "عنبر",
    "ورد",
    "صندل",
    "عطور عربية",
    "بخور كويتي",
    "دار البخور",
    "incense",
    "oud",
    "musk",
    "amber",
    "rose",
    "sandalwood"
  ],
  authors: [{ name: "دار البخور" }],
  creator: "دار البخور",
  publisher: "دار البخور",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daaralbukhor.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: "https://daaralbukhor.com",
    title: "دار البخور - عبقٌ يبدأ من الدار",
    description: "متجر البخور العربي الأصيل - أجود أنواع البخور والعود والمسك والمسك الطبيعي. منتجات عطرية فاخرة من الكويت مع توصيل مجاني.",
    siteName: "دار البخور",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "دار البخور - عبقٌ يبدأ من الدار",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دار البخور - عبقٌ يبدأ من الدار",
    description: "متجر البخور العربي الأصيل - أجود أنواع البخور والعود والمسك والمسك الطبيعي. منتجات عطرية فاخرة من الكويت مع توصيل مجاني.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${tajawal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
