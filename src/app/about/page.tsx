import { Navbar, Footer, WhatsAppButton } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على قصة دار البخور، رحلتنا في تقديم أجود أنواع البخور والعود والمسك الأصيل منذ عام 2010. جودة مضمونة وخدمة متميزة.",
  keywords: [
    "من نحن",
    "قصة دار البخور",
    "تاريخ الشركة",
    "رؤية الشركة",
    "مهمة الشركة",
    "فريق العمل",
    "بخور كويتي",
    "عطور عربية"
  ],
  openGraph: {
    title: "من نحن - دار البخور",
    description: "تعرف على قصة دار البخور، رحلتنا في تقديم أجود أنواع البخور والعود والمسك الأصيل منذ عام 2010. جودة مضمونة وخدمة متميزة.",
    type: "website",
  },
};
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Globe, Shield, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              من نحن
            </h1>
            <p className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
              دار البخور - عبقٌ يبدأ من الدار، حيث نقدم أجود أنواع البخور والعود والمسك الأصيل
              من مصادر موثوقة ومختارة بعناية
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  تأسست دار البخور عام 2015 في الكويت بهدف تقديم أجود أنواع البخور والعود والمسك
                  الأصيل للعملاء في جميع أنحاء الخليج العربي. نحن نؤمن بأن العطور العربية الأصيلة
                  هي جزء من تراثنا الثقافي العريق.
                </p>
                <p>
                  بدأنا رحلتنا بفريق صغير من الخبراء في مجال العطور العربية، والذين يمتلكون
                  معرفة عميقة بفنون العطور التقليدية. اليوم، نحن فخورون بأن نكون الوجهة الأولى
                  لعشاق العطور الأصيلة في المنطقة.
                </p>
                <p>
                  نعمل مع أفضل الموردين في الهند وسريلانكا وكمبوديا لضمان جودة منتجاتنا،
                  كما نقدم خدمة عملاء متميزة وضمان الجودة على جميع منتجاتنا.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text mb-2">
                    شغفنا بالعطور
                  </h3>
                  <p className="text-brand-text/80">
                    نحن نؤمن بقوة العطور في ربط الناس بذكرياتهم الجميلة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              قيمنا
            </h2>
            <p className="text-lg text-muted-foreground">
              المبادئ التي نؤمن بها ونسعى لتحقيقها في كل ما نقدمه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  الجودة الأصيلة
                </h3>
                <p className="text-muted-foreground">
                  نقدم فقط المنتجات الأصيلة عالية الجودة من أفضل الموردين المعتمدين
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  خدمة العملاء
                </h3>
                <p className="text-muted-foreground">
                  فريق خدمة عملاء متخصص ومتاح لمساعدتك في اختيار أفضل المنتجات
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  التوصيل السريع
                </h3>
                <p className="text-muted-foreground">
                  توصيل مجاني وسريع لجميع أنحاء الكويت ودول الخليج العربي
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  ضمان الجودة
                </h3>
                <p className="text-muted-foreground">
                  ضمان الجودة والرضا التام على جميع منتجاتنا مع إمكانية الإرجاع
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  التميز المستمر
                </h3>
                <p className="text-muted-foreground">
                  نسعى دائماً لتطوير منتجاتنا وخدماتنا لتلبية احتياجات عملائنا
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  الشغف بالعطور
                </h3>
                <p className="text-muted-foreground">
                  نحن عشاق حقيقيون للعطور العربية الأصيلة ونشاركك هذا الشغف
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-brand-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              أرقامنا تتحدث
            </h2>
            <p className="text-xl text-white/80">
              إنجازاتنا في خدمة عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-secondary mb-2">
                10,000+
              </div>
              <div className="text-white/80 text-lg">
                عميل راضي
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-secondary mb-2">
                500+
              </div>
              <div className="text-white/80 text-lg">
                منتج مختلف
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-secondary mb-2">
                8
              </div>
              <div className="text-white/80 text-lg">
                سنوات من الخبرة
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-secondary mb-2">
                99%
              </div>
              <div className="text-white/80 text-lg">
                معدل الرضا
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              فريقنا
            </h2>
            <p className="text-lg text-muted-foreground">
              فريق من الخبراء المتخصصين في مجال العطور العربية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-primary">أ.م</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  أحمد محمد
                </h3>
                <Badge variant="secondary" className="mb-3">
                  المؤسس والمدير التنفيذي
                </Badge>
                <p className="text-muted-foreground text-sm">
                  خبير في العطور العربية مع أكثر من 15 عاماً من الخبرة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-secondary">ف.ع</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  فاطمة العتيبي
                </h3>
                <Badge variant="secondary" className="mb-3">
                  مديرة الجودة
                </Badge>
                <p className="text-muted-foreground text-sm">
                  متخصصة في ضمان جودة المنتجات واختيار أفضل الموردين
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-accent">م.ش</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  محمد الشمري
                </h3>
                <Badge variant="secondary" className="mb-3">
                  مدير خدمة العملاء
                </Badge>
                <p className="text-muted-foreground text-sm">
                  متخصص في خدمة العملاء وضمان رضاهم التام
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-6">
            انضم إلى عائلة دار البخور
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            اكتشف أجود أنواع البخور والعود والمسك الأصيل وشاركنا شغفك بالعطور العربية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4"
            >
              تصفح المنتجات
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-4"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
