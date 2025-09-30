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
    title: product.name_ar,
    description: product.description_ar,
    keywords: [
      product.name_ar,
      product.name_en,
      ...(product.tags_ar || []),
      "بخور",
      "عود",
      "مسك",
      "عنبر",
      "ورد",
      "صندل"
    ],
    openGraph: {
      title: `${product.name_ar} - دار البخور`,
      description: product.description_ar,
      type: "product",
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 600,
          alt: product.name_ar,
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
