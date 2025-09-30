"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar, Footer, WhatsAppButton, RequestOrderModal } from "@/components";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

interface Product {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  images: string[];
  mainImage: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  tags: string[];
  featured: boolean;
  inStock: boolean;
  specifications?: Record<string, string>;
  options?: {
    name: string;
    type: string;
    required: boolean;
    values: {
      value: string;
      label: string;
      price: number;
    }[];
  }[];
}

interface Category {
  id: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  icon: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [showOrderModal, setShowOrderModal] = useState(false);

  // Find the product by slug
  const product: Product | undefined = productsData.find((p: Product) => p.slug === slug);
  const categories: Category[] = categoriesData;

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-primary mb-4">
              المنتج غير موجود
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              عذراً، لم نتمكن من العثور على المنتج المطلوب
            </p>
            <Button asChild>
              <a href="/products">العودة إلى المنتجات</a>
            </Button>
          </div>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const category = categories.find(cat => cat.id === product.category);
  const currentPrice = product.price + (selectedOptions ? Object.values(selectedOptions).reduce((total, optionValue) => {
    const option = product.options?.find(opt => opt.values.some(choice => choice.value === optionValue));
    const choice = option?.values.find(choice => choice.value === optionValue);
    return total + (choice?.price || 0);
  }, 0) : 0);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-brand-secondary text-brand-secondary"
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 space-x-reverse text-sm">
            <a href="/" className="text-brand-primary hover:text-brand-primary/80">
              الرئيسية
            </a>
            <span className="text-gray-400">/</span>
            <a href="/products" className="text-brand-primary hover:text-brand-primary/80">
              المنتجات
            </a>
            <span className="text-gray-400">/</span>
            {category && (
              <>
                <a 
                  href={`/products?category=${category.id}`} 
                  className="text-brand-primary hover:text-brand-primary/80"
                >
                  {category.name_ar}
                </a>
                <span className="text-gray-400">/</span>
              </>
            )}
            <span className="text-gray-600">{product.name_ar}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden rounded-lg bg-white border border-gray-200">
              <ImageWithFallback
                src={product.images[selectedImageIndex] || product.mainImage || "/seed/bk1.svg"}
                alt={product.name}
                ratio={1}
                className="object-cover"
                priority
              />
              {product.featured && (
                <Badge className="absolute top-4 right-4 bg-brand-secondary text-white">
                  مميز
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 space-x-reverse overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-lg border-2 ${
                      selectedImageIndex === index
                        ? "border-brand-primary"
                        : "border-gray-200"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      ratio={1}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-brand-text mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {product.nameEn}
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating}/5 ({product.reviews} تقييم)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-brand-primary">
                {currentPrice} {product.currency}
              </span>
              {currentPrice !== product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.price} {product.currency}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                الوصف
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              {product.longDescription && (
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {product.longDescription}
                </p>
              )}
            </div>

            {/* Product Options */}
            {product.options && product.options.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-text">
                  خيارات المنتج
                </h3>
                {product.options.map((option, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-brand-text mb-2">
                      {option.name}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((choice) => (
                        <button
                          key={choice.value}
                          onClick={() => handleOptionChange(option.name, choice.value)}
                          className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                            selectedOptions[option.name] === choice.value
                              ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                              : "border-gray-300 hover:border-brand-primary/50"
                          }`}
                        >
                          {choice.label}
                          {choice.price > 0 && (
                            <span className="text-xs text-brand-primary mr-1">
                              (+{choice.price} {product.currency})
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-brand-text">
                  الكمية:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white"
                  onClick={() => setShowOrderModal(true)}
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  طلب سريع
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-brand-primary" />
                <span>توصيل مجاني</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span>ضمان الجودة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCcw className="w-4 h-4 text-brand-primary" />
                <span>إرجاع سهل</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-brand-text mb-8">
              مواصفات المنتج
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-brand-text">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-brand-text mb-4">
              العلامات
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
      
      {/* Order Modal */}
      <RequestOrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        product={{
          id: product.id,
          name: product.name,
          price: currentPrice,
          currency: product.currency,
          options: product.options?.map(opt => ({
            name: opt.name,
            type: opt.type,
            choices: opt.values.map(choice => ({
              label: choice.label,
              value: choice.value,
              price_modifier: choice.price
            }))
          }))
        }}
      />
    </div>
  );
}
