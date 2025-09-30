import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle } from "lucide-react";

interface Testimonial {
  id: string;
  customerName?: string;
  rating: number;
  comment?: string;
  productRefId?: string;
  location?: string;
  verifiedPurchase?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
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
    <Card className="h-full bg-white border-gray-200 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
              <span className="text-brand-primary font-semibold text-sm">
                {testimonial.customerName?.charAt(0) || "ع"}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-brand-text text-sm">
                {testimonial.customerName || "عميل محترم"}
              </h4>
              {testimonial.location && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </div>
              )}
            </div>
          </div>
          
          {testimonial.verifiedPurchase && (
            <Badge variant="secondary" className="text-xs">
              <CheckCircle className="w-3 h-3 ml-1" />
              مشتري موثق
            </Badge>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {testimonial.rating}/5
          </span>
        </div>

        {/* Comment */}
        <p className="text-sm text-brand-text leading-relaxed">
          &quot;{testimonial.comment || "تعليق رائع على المنتج"}&quot;
        </p>

        {/* Product Reference */}
        {testimonial.productRefId && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-muted-foreground">
              تعليق على منتج: {testimonial.productRefId}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
