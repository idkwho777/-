import { Button } from "@/components/ui/button";
import { Navbar, Footer, WhatsAppButton, ProductCard, CategoryCard, TestimonialCard } from "@/components";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import testimonialsData from "@/data/testimonials.json";

export default function Home() {
  // Get featured products
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 6);
  
  // Get all categories
  const categories = categoriesData;
  
  // Get testimonials
  const testimonials = testimonialsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6">
              دار البخور
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent mb-8">
              عبقٌ يبدأ من الدار
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-brand-text mb-6 leading-relaxed">
                مرحباً بك في دار البخور، حيث تجد أجود أنواع البخور والعود والمسك الأصيل
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقدم لك مجموعة مختارة بعناية من أفضل المنتجات العربية الأصيلة
              </p>
            </div>

            <div className="flex gap-6 items-center justify-center flex-col sm:flex-row">
              <Button 
                size="lg" 
                className="font-medium px-8 py-4 text-lg bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                تسوّق الآن
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-medium px-8 py-4 text-lg border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300"
              >
                تصفح المنتجات
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-text mb-4">
              لماذا تختار دار البخور؟
            </h3>
            <p className="text-lg text-muted-foreground">
              جودة أصيلة وخدمة متميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-text mb-2">منتجات أصيلة</h4>
              <p className="text-muted-foreground">أجود أنواع البخور والعود من مصادر موثوقة</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-text mb-2">توصيل سريع</h4>
              <p className="text-muted-foreground">توصيل مجاني لجميع أنحاء الكويت</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-text mb-2">جودة مضمونة</h4>
              <p className="text-muted-foreground">ضمان الجودة والرضا التام</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-text mb-4">
              منتجاتنا المميزة
            </h3>
            <p className="text-lg text-muted-foreground">
              مجموعة مختارة من أجود أنواع البخور والعود
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.name,
                  nameEn: product.nameEn,
                  description: product.description,
                  slug: product.slug,
                  category: product.category,
                  price: product.price,
                  currency: product.currency,
                  images: product.images,
                  mainImage: product.mainImage,
                  inStock: product.inStock,
                  featured: product.featured,
                  tags: product.tags,
                  rating: product.rating,
                  reviews: product.reviews,
                  weight: product.weight,
                  origin: product.origin,
                }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4"
            >
              عرض جميع المنتجات
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-text mb-4">
              تصفح حسب الفئة
            </h3>
            <p className="text-lg text-muted-foreground">
              اكتشف مجموعتنا المتنوعة من المنتجات العطرية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={{
                  id: category.id,
                  name: category.name_ar,
                  nameEn: category.name_en,
                  description: category.description_ar,
                  image: category.image,
                  icon: category.icon,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-text mb-4">
              آراء عملائنا
            </h3>
            <p className="text-lg text-muted-foreground">
              ما يقوله عملاؤنا عن منتجاتنا وخدماتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={{
                  id: testimonial.id,
                  customerName: testimonial.name,
                  rating: testimonial.rating,
                  comment: testimonial.text,
                  productRefId: testimonial.product,
                  location: testimonial.location,
                  verifiedPurchase: testimonial.verified,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}