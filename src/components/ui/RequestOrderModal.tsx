"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, ShoppingCart, MessageCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  weight: string;
  images: string[];
}

interface RequestOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

export default function RequestOrderModal({ isOpen, onClose, product }: RequestOrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "1",
    weight: "",
    message: "",
    deliveryMethod: "delivery",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create WhatsApp message
    const message = `طلب منتج جديد:

المنتج: ${product?.name || "منتج غير محدد"}
الكمية: ${formData.quantity}
الوزن: ${formData.weight || "غير محدد"}
الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
طريقة التوصيل: ${formData.deliveryMethod === "delivery" ? "توصيل" : "استلام من المحل"}
العنوان: ${formData.address || "غير محدد"}
رسالة إضافية: ${formData.message || "لا توجد"}`;

    const whatsappUrl = `https://wa.me/96560744844?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    onClose();
  };

  const handleWhatsAppDirect = () => {
    const message = `مرحباً، أريد طلب ${product?.name || "منتج"} من دار البخور`;
    const whatsappUrl = `https://wa.me/96560744844?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-bold text-brand-text">
                طلب منتج
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {product ? `طلب ${product.name}` : "طلب منتج جديد"}
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Info */}
          {product && (
            <div className="bg-brand-bg p-4 rounded-lg">
              <h4 className="font-semibold text-brand-text mb-2">{product.name}</h4>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>السعر: {product.price} {product.currency}</span>
                <span>الوزن: {product.weight}</span>
              </div>
            </div>
          )}

          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-text">المعلومات الشخصية</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">الاسم الكامل *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">رقم الهاتف *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+965 60744844"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-brand-text">تفاصيل الطلب</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">الكمية *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  required
                  placeholder="1"
                />
              </div>

              <div>
                <Label htmlFor="weight">الوزن المطلوب</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  placeholder="مثال: 25 جرام"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="deliveryMethod">طريقة التوصيل *</Label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={formData.deliveryMethod === "delivery"}
                    onChange={(e) => handleInputChange("deliveryMethod", e.target.value)}
                    className="ml-2"
                  />
                  توصيل إلى العنوان
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={formData.deliveryMethod === "pickup"}
                    onChange={(e) => handleInputChange("deliveryMethod", e.target.value)}
                    className="ml-2"
                  />
                  استلام من المحل
                </label>
              </div>
            </div>

            {formData.deliveryMethod === "delivery" && (
              <div>
                <Label htmlFor="address">عنوان التوصيل *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required={formData.deliveryMethod === "delivery"}
                  placeholder="أدخل عنوان التوصيل الكامل"
                  rows={3}
                />
              </div>
            )}

            <div>
              <Label htmlFor="message">رسالة إضافية</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="أي ملاحظات أو طلبات خاصة..."
                rows={3}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white"
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppDirect}
              className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <MessageCircle className="w-4 h-4 ml-2" />
              واتساب مباشر
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
