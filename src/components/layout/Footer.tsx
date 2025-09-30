import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Camera } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "العود", href: "/products?category=oud" },
      { name: "البخور", href: "/products?category=bukhoor" },
      { name: "المسك", href: "/products?category=musk" },
      { name: "العنبر", href: "/products?category=amber" },
      { name: "الورد", href: "/products?category=rose" },
      { name: "الصندل", href: "/products?category=sandalwood" },
    ],
    company: [
      { name: "من نحن", href: "/about" },
      { name: "تواصل معنا", href: "/contact" },
      { name: "الأسئلة الشائعة", href: "/faq" },
      { name: "الشهادات", href: "/testimonials" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "/legal/privacy" },
      { name: "شروط الاستخدام", href: "/legal/terms" },
      { name: "سياسة الإرجاع", href: "/legal/returns" },
      { name: "سياسة الشحن", href: "/legal/shipping" },
    ],
  };

  const socialLinks = [
    { name: "إنستغرام", href: "https://instagram.com/daaralbkhoor", icon: Instagram },
    { name: "سناب شات", href: "https://snapchat.com/add/daaralbkhor", icon: Camera },
    { name: "فيسبوك", href: "https://facebook.com/daaralbkhor", icon: Facebook },
    { name: "تويتر", href: "https://twitter.com/daaralbkhor", icon: Twitter },
  ];

  return (
    <footer className="bg-brand-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">
              دار البخور
            </h3>
            <p className="text-brand-secondary/80 mb-6 leading-relaxed">
              عبقٌ يبدأ من الدار - أجود أنواع البخور والعود والمسك الأصيل
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 ml-2 text-brand-secondary" />
                <span dir="ltr">+965 60744844</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 ml-2 text-brand-secondary" />
                <span>info@daaralbkhor.com</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 ml-2 text-brand-secondary mt-0.5" />
                <span>شارع الخليج العربي، الكويت</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 ml-2 text-brand-secondary" />
                <span>9:00 ص - 11:00 م</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">المنتجات</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-secondary/80 hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-secondary/80 hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">القانونية</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-secondary/80 hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-brand-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 space-x-reverse mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-secondary/80 hover:text-brand-secondary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-brand-secondary/80">
                © {currentYear} دار البخور. جميع الحقوق محفوظة.
              </p>
              <p className="text-xs text-brand-secondary/60 mt-1">
                مصمم ومطور بعناية في الكويت
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
