import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8 bg-white shadow-lg">
          <CardContent className="space-y-6">
            {/* 404 Icon */}
            <div className="text-8xl font-bold text-brand-primary mb-4">
              404
            </div>
            
            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-brand-text">
                الصفحة غير موجودة
              </h1>
              <p className="text-lg text-muted-foreground">
                عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها
              </p>
              <p className="text-sm text-muted-foreground">
                قد تكون الصفحة قد تم نقلها أو حذفها، أو ربما أخطأت في كتابة الرابط
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  العودة للرئيسية
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
                <Link href="/products" className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  تصفح المنتجات
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-4">
                أو جرب هذه الروابط المفيدة:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/about" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                  من نحن
                </Link>
                <Link href="/contact" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                  تواصل معنا
                </Link>
                <Link href="/products" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                  جميع المنتجات
                </Link>
                <Link href="/legal" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                  الشروط والأحكام
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

