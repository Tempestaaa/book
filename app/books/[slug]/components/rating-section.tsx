import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import { MessageCircleMore, ShoppingCart } from "lucide-react";

export default function RatingSection() {
  return (
    <div className="flex items-center gap-4 py-2">
      <Rating rate={4} size="lg" showScore />
      <Separator orientation="vertical" className="h-6!" />
      <div className="flex items-center gap-2 text-muted-foreground small-font-size">
        <MessageCircleMore className="size-4" /> 1,500 reviews
      </div>
      <Separator orientation="vertical" className="h-6!" />
      <div className="flex items-center gap-2 text-muted-foreground small-font-size">
        <ShoppingCart className="size-4" /> 3,000 sold
      </div>
    </div>
  );
}
