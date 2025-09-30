import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع دار البخور للحصول على استشارة مجانية حول منتجاتنا العطرية. هاتف، واتساب، إيميل، أو زيارة متجرنا في الكويت.",
  keywords: [
    "تواصل معنا",
    "اتصل بنا",
    "استشارة بخور",
    "واتساب",
    "هاتف",
    "إيميل",
    "عنوان المتجر",
    "ساعات العمل",
    "الكويت"
  ],
  openGraph: {
    title: "تواصل معنا - دار البخور",
    description: "تواصل مع دار البخور للحصول على استشارة مجانية حول منتجاتنا العطرية. هاتف، واتساب، إيميل، أو زيارة متجرنا في الكويت.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

