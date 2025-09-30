"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "جميع المنتجات", href: "/products" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
    { name: "السياسات", href: "/legal" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-primary">
                دار البخور
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brand-text hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
            >
              <Phone className="w-4 h-4 ml-2" />
              <span dir="ltr">+965 60744844</span>
            </Button>
            <Button
              size="sm"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white"
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              سلة التسوق
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-brand-primary">
                      دار البخور
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <nav className="flex-1">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-brand-text hover:text-brand-primary hover:bg-brand-primary/10 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  <div className="space-y-4 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      <span dir="ltr">+965 60744844</span>
                    </Button>
                    <Button
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 ml-2" />
                      سلة التسوق
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
