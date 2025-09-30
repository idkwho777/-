"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar, Footer, WhatsAppButton, ProductCard } from "@/components";
import { Search, Filter, X, Star, ShoppingCart } from "lucide-react";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

interface Product {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  category: string;
  description_ar: string;
  description_en: string;
  images: string[];
  price: number;
  currency: string;
  rating: number;
  reviews_count: number;
  tags_ar: string[];
  tags_en: string[];
  is_featured: boolean;
  specifications_ar: Record<string, string>;
  specifications_en: Record<string, string>;
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

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product: Product) => {
      const matchesSearch = 
        (product.name_ar?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
        (product.name_en?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
        (product.description_ar?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
        (product.tags_ar?.some(tag => tag?.toLowerCase().includes(searchTerm.toLowerCase())) || false);

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name_ar.localeCompare(b.name_ar));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const categories: Category[] = categoriesData;

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setPriceRange([0, 1000]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-primary mb-4">
              جميع المنتجات
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              اكتشف مجموعتنا الكاملة من أجود أنواع البخور والعود والمسك
            </p>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث عن المنتجات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 text-right"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  فلترة
                </Button>
                
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  مسح الفلاتر
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
              <h3 className="text-lg font-semibold text-brand-text mb-4">الفلاتر</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-brand-text mb-3">الفئة</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="ml-2"
                    />
                    <span className="text-sm">جميع الفئات</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="ml-2"
                      />
                      <span className="text-sm">{category.name_ar}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-brand-text mb-3">نطاق السعر</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="من"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="text-center"
                    />
                    <span className="text-sm text-muted-foreground">إلى</span>
                    <Input
                      type="number"
                      placeholder="إلى"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="text-center"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">دينار كويتي</span>
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h4 className="font-medium text-brand-text mb-3">ترتيب حسب</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="featured">المميز</option>
                  <option value="price-low">السعر: من الأقل للأعلى</option>
                  <option value="price-high">السعر: من الأعلى للأقل</option>
                  <option value="rating">التقييم</option>
                  <option value="name">الاسم</option>
                </select>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold text-brand-text">
                  {filteredProducts.length} منتج
                </h2>
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {categories.find(cat => cat.id === selectedCategory)?.name_ar}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => setSelectedCategory("all")}
                    />
                  </Badge>
                )}
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    "{searchTerm}"
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => setSearchTerm("")}
                    />
                  </Badge>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name_ar,
                      nameEn: product.name_en,
                      description: product.description_ar,
                      slug: product.slug,
                      category: product.category,
                      price: product.price,
                      currency: product.currency,
                      images: product.images,
                      mainImage: product.images[0],
                      inStock: true,
                      featured: product.is_featured,
                      tags: product.tags_ar,
                      rating: product.rating,
                      reviews: product.reviews_count,
                      weight: product.specifications_ar?.الوزن || "",
                      origin: product.specifications_ar?.المنشأ || "",
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  لم نجد منتجات تطابق بحثك
                </h3>
                <p className="text-muted-foreground mb-4">
                  جرب تغيير كلمات البحث أو الفلاتر
                </p>
                <Button onClick={clearFilters} variant="outline">
                  مسح جميع الفلاتر
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
