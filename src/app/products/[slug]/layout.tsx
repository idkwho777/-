import type { Metadata } from "next";
import productsData from "@/data/products.json";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "المنتج غير موجود",
      description: "عذراً، لم نتمكن من العثور على المنتج المطلوب",
    };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: [
      product.name,
      product.nameEn,
      ...(product.tags || []),
      "بخور",
      "عود",
      "مسك",
      "عنبر",
      "ورد",
      "صندل"
    ],
    openGraph: {
      title: `${product.name} - دار البخور`,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
