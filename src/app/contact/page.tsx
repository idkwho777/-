"use client";

import { useState } from "react";
import { Navbar, Footer, WhatsAppButton } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في اختيار أفضل المنتجات والإجابة على جميع استفساراتك
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-brand-text mb-6">
                    أرسل لنا رسالة
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-brand-text font-medium">
                          الاسم الكامل *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-brand-text font-medium">
                          البريد الإلكتروني *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-brand-text font-medium">
                          رقم الهاتف
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="+965 60744844"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-brand-text font-medium">
                          الموضوع *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="موضوع الرسالة"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-brand-text font-medium">
                        الرسالة *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                    >
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-text mb-6">
                  معلومات التواصل
                </h2>
                <p className="text-muted-foreground mb-8">
                  نحن متاحون لخدمتك في أي وقت. اختر الطريقة التي تناسبك للتواصل معنا.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-2">
                          الهاتف
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          +<span dir="ltr">+965 60744844</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          متاح من 9:00 صباحاً إلى 11:00 مساءً
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-2">
                          البريد الإلكتروني
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          info@daaralbukhor.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          نرد خلال 24 ساعة
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-2">
                          العنوان
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          شارع الخليج العربي، الكويت
                        </p>
                        <p className="text-sm text-muted-foreground">
                          مبنى دار البخور، الطابق الأول
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-2">
                          ساعات العمل
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          السبت - الخميس: 9:00 ص - 11:00 م
                        </p>
                        <p className="text-sm text-muted-foreground">
                          الجمعة: 2:00 م - 11:00 م
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-2">
                          واتساب
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          +<span dir="ltr">+965 60744844</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          متاح 24/7 للاستفسارات السريعة
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-muted-foreground">
              إجابات على أكثر الأسئلة شيوعاً من عملائنا
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-brand-text mb-3">
                  ما هي مدة التوصيل؟
                </h3>
                <p className="text-muted-foreground">
                  التوصيل مجاني لجميع أنحاء الكويت خلال 24-48 ساعة. للدول الأخرى، 
                  المدة تتراوح بين 3-7 أيام عمل حسب الوجهة.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-brand-text mb-3">
                  هل المنتجات أصلية؟
                </h3>
                <p className="text-muted-foreground">
                  نعم، جميع منتجاتنا أصلية 100% ومستوردة من أفضل الموردين المعتمدين. 
                  نحن نضمن أصالة كل منتج نبيعه.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-brand-text mb-3">
                  هل يمكنني إرجاع المنتج؟
                </h3>
                <p className="text-muted-foreground">
                  نعم، يمكنك إرجاع المنتج خلال 14 يوم من تاريخ الشراء بشرط أن يكون 
                  في حالته الأصلية مع الفاتورة.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-brand-text mb-3">
                  ما هي طرق الدفع المتاحة؟
                </h3>
                <p className="text-muted-foreground">
                  نقبل الدفع عند الاستلام، التحويل البنكي، والدفع الإلكتروني عبر 
                  البطاقات الائتمانية.
                </p>
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
