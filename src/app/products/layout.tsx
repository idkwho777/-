import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "جميع المنتجات",
  description: "اكتشف مجموعتنا الكاملة من أجود أنواع البخور والعود والمسك والمسك الطبيعي. منتجات عطرية فاخرة من الكويت مع توصيل مجاني.",
  keywords: [
    "منتجات بخور",
    "عود للبيع",
    "مسك طبيعي",
    "عنبر أصيل",
    "ورد عطري",
    "صندل هندي",
    "بخور كويتي",
    "عطور عربية"
  ],
  openGraph: {
    title: "جميع المنتجات - دار البخور",
    description: "اكتشف مجموعتنا الكاملة من أجود أنواع البخور والعود والمسك والمسك الطبيعي. منتجات عطرية فاخرة من الكويت مع توصيل مجاني.",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

