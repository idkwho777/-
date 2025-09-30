"use client";

import { useState } from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  mainImage: string;
  inStock: boolean;
  featured: boolean;
  tags: string[];
  rating: number;
  reviews: number;
  weight: string;
  origin: string;
}

interface ProductCardProps {
  product: Product;
  onRequestOrder?: (productId: string) => void;
}

export default function ProductCard({ product, onRequestOrder }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleRequestOrder = () => {
    if (onRequestOrder) {
      onRequestOrder(product.id);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return `${price.toFixed(3)} ${currency}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-brand-secondary/50 text-brand-secondary" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border-gray-200">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.mainImage}
          alt={product.name}
          ratio={1}
          className="group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-brand-secondary text-white">
              مميز
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">
              غير متوفر
            </Badge>
          )}
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white"
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              <Eye className="w-4 h-4 text-gray-600" />
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-brand-text mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-brand-primary">
            {formatPrice(product.price, product.currency)}
          </div>
          <div className="text-sm text-muted-foreground">
            {product.weight}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button
            className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white"
            disabled={!product.inStock}
            onClick={handleRequestOrder}
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            {product.inStock ? "طلب المنتج" : "غير متوفر"}
          </Button>
          <Button
            variant="outline"
            className="px-3 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
