import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  icon: string;
  productCount?: number;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border-gray-200 hover:border-brand-primary/20">
      <Link href={`/products?category=${category.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <ImageWithFallback
            src={category.image}
            alt={category.name}
            ratio={1}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon */}
          <div className="absolute top-4 right-4 text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {category.icon}
          </div>
        </div>

        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {category.description}
          </p>
          {category.productCount && (
            <div className="text-xs text-brand-primary font-medium">
              {category.productCount} منتج
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
