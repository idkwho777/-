import { Navbar, Footer, WhatsAppButton } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "اقرأ شروط الاستخدام وسياسة الخصوصية وسياسة الإرجاع لدار البخور. نلتزم بحماية بياناتك وتقديم أفضل خدمة ممكنة.",
  keywords: [
    "شروط الاستخدام",
    "سياسة الخصوصية",
    "سياسة الإرجاع",
    "سياسة الشحن",
    "الأحكام والشروط",
    "حقوق المستخدم",
    "حماية البيانات",
    "دار البخور"
  ],
  openGraph: {
    title: "الشروط والأحكام - دار البخور",
    description: "اقرأ شروط الاستخدام وسياسة الخصوصية وسياسة الإرجاع لدار البخور. نلتزم بحماية بياناتك وتقديم أفضل خدمة ممكنة.",
    type: "website",
  },
};
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Truck, RotateCcw, Scale } from "lucide-react";


export default function LegalPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              السياسات القانونية
            </h1>
            <p className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
              جميع السياسات والشروط القانونية المتعلقة بخدماتنا ومنتجاتنا
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  سياسة الخصوصية
                </h3>
                <p className="text-muted-foreground mb-4">
                  كيفية جمعنا واستخدامنا وحماية معلوماتك الشخصية
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  شروط الاستخدام
                </h3>
                <p className="text-muted-foreground mb-4">
                  الشروط والأحكام العامة لاستخدام موقعنا وخدماتنا
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  سياسة الشحن
                </h3>
                <p className="text-muted-foreground mb-4">
                  تفاصيل التوصيل والشحن لجميع أنحاء الكويت والخليج
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  سياسة الإرجاع
                </h3>
                <p className="text-muted-foreground mb-4">
                  شروط وإجراءات إرجاع المنتجات واسترداد المبالغ
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  الشروط العامة
                </h3>
                <p className="text-muted-foreground mb-4">
                  الشروط العامة للتعامل مع دار البخور
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  ضمان الجودة
                </h3>
                <p className="text-muted-foreground mb-4">
                  ضمانات الجودة والأصالة لجميع منتجاتنا
                </p>
                <Button variant="outline" className="w-full">
                  قراءة المزيد
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <div className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-text">
                    سياسة الخصوصية
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        1. جمع المعلومات
                      </h3>
                      <p>
                        نجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو الشراء، 
                        مثل اسمك وعنوانك ورقم هاتفك وعنوان بريدك الإلكتروني. كما نجمع 
                        معلومات تلقائياً عن استخدامك لموقعنا.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        2. استخدام المعلومات
                      </h3>
                      <p>
                        نستخدم معلوماتك لتقديم خدماتنا، معالجة طلباتك، التواصل معك، 
                        وتحسين تجربتك. نحن لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة 
                        دون موافقتك الصريحة.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        3. حماية المعلومات
                      </h3>
                      <p>
                        نستخدم تقنيات أمان متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به، 
                        التعديل، أو الكشف. جميع المعاملات المالية محمية بتشفير SSL.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        4. ملفات تعريف الارتباط
                      </h3>
                      <p>
                        نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك إدارة 
                        تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        5. حقوقك
                      </h3>
                      <p>
                        لديك الحق في الوصول إلى معلوماتك الشخصية، تصحيحها، حذفها، أو تقييد 
                        معالجتها. يمكنك ممارسة هذه الحقوق من خلال التواصل معنا.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Terms of Service Content */}
          <div className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-text">
                    شروط الاستخدام
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        1. قبول الشروط
                      </h3>
                      <p>
                        باستخدام موقع دار البخور أو شراء منتجاتنا، فإنك توافق على الالتزام 
                        بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، 
                        يرجى عدم استخدام موقعنا.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        2. استخدام الموقع
                      </h3>
                      <p>
                        يمكنك استخدام موقعنا للأغراض القانونية فقط. لا يجوز لك استخدام 
                        الموقع لأي غرض غير قانوني أو غير مصرح به، أو بأي طريقة قد تضر 
                        أو تعطل أو تفرط في تحميل الموقع.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        3. المنتجات والأسعار
                      </h3>
                      <p>
                        نحن نحتفظ بالحق في تغيير الأسعار والمنتجات في أي وقت دون إشعار مسبق. 
                        جميع الأسعار تشمل ضريبة القيمة المضافة. نحن نضمن أصالة جميع منتجاتنا.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        4. الطلبات والدفع
                      </h3>
                      <p>
                        جميع الطلبات تخضع للموافقة. نحن نحتفظ بالحق في رفض أو إلغاء أي طلب. 
                        يجب دفع جميع المبالغ مقدماً قبل الشحن، ما لم يتم الاتفاق على خلاف ذلك.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        5. المسؤولية
                      </h3>
                      <p>
                        لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن 
                        استخدام موقعنا أو منتجاتنا، باستثناء ما هو مطلوب بموجب القانون.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Policy Content */}
          <div className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-text">
                    سياسة الشحن والتوصيل
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        1. مناطق التوصيل
                      </h3>
                      <p>
                        نقدم التوصيل المجاني لجميع أنحاء الكويت. كما نقدم التوصيل 
                        لدول الخليج العربي الأخرى بتكلفة إضافية حسب الوجهة.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        2. مدة التوصيل
                      </h3>
                      <p>
                        التوصيل داخل الكويت: 24-48 ساعة عمل. التوصيل لدول الخليج: 
                        3-7 أيام عمل. قد تختلف المدة حسب الظروف الجوية والمناسبات الخاصة.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        3. تكلفة التوصيل
                      </h3>
                      <p>
                        التوصيل مجاني للطلبات التي تزيد عن 50 دينار كويتي داخل الكويت. 
                        للطلبات الأقل من 50 دينار، رسوم التوصيل 5 دنانير كويتية.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        4. تتبع الطلبات
                      </h3>
                      <p>
                        ستحصل على رقم تتبع لطلبك عبر الرسائل النصية والبريد الإلكتروني. 
                        يمكنك تتبع حالة طلبك في أي وقت من خلال موقعنا.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        5. التوصيل الآمن
                      </h3>
                      <p>
                        جميع منتجاتنا يتم تعبئتها بعناية فائقة لضمان وصولها في حالة ممتازة. 
                        نحن نضمن وصول طلبك أو استرداد كامل للمبلغ.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Return Policy Content */}
          <div className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-text">
                    سياسة الإرجاع والاسترداد
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        1. فترة الإرجاع
                      </h3>
                      <p>
                        يمكنك إرجاع المنتج خلال 14 يوم من تاريخ الاستلام. يجب أن يكون 
                        المنتج في حالته الأصلية مع جميع الملحقات والتغليف.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        2. شروط الإرجاع
                      </h3>
                      <p>
                        المنتج يجب أن يكون غير مستخدم، في حالته الأصلية، مع الفاتورة. 
                        المنتجات المفتوحة أو المستخدمة لا يمكن إرجاعها لأسباب صحية.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        3. إجراءات الإرجاع
                      </h3>
                      <p>
                        اتصل بنا أولاً للحصول على رقم إرجاع. سنقوم بترتيب استلام المنتج 
                        من منزلك مجاناً. بعد فحص المنتج، سنقوم باسترداد المبلغ خلال 5-7 أيام عمل.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        4. الاسترداد
                      </h3>
                      <p>
                        سيتم استرداد المبلغ بنفس طريقة الدفع الأصلية. قد تستغرق عملية 
                        الاسترداد 5-10 أيام عمل حسب البنك.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-3">
                        5. المنتجات المعفاة من الإرجاع
                      </h3>
                      <p>
                        المنتجات المخصصة، المنتجات المفتوحة، والمنتجات التي تم استخدامها 
                        لا يمكن إرجاعها. كما أن المنتجات التالفة بسبب سوء الاستخدام لا يمكن إرجاعها.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact for Legal Questions */}
          <div className="text-center">
            <Card className="p-8 bg-brand-primary/5">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-brand-text mb-4">
                  لديك أسئلة قانونية؟
                </h2>
                <p className="text-muted-foreground mb-6">
                  إذا كان لديك أي أسئلة حول سياساتنا القانونية، لا تتردد في التواصل معنا
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                  >
                    تواصل معنا
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                  >
                    تحميل السياسات
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
