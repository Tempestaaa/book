import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Heart, Share, ShoppingCart } from "lucide-react";

type Props = {
  price: number;
  originalPrice: number;
};

export default function BookSidebar({ price, originalPrice }: Props) {
  const saleOffPercent = Math.ceil(100 - (price * 100) / originalPrice);

  return (
    <aside className="w-80">
      <div className="sticky top-20 space-y-3">
        <div className="h-110 bg-card rounded"></div>
        <div className="flex flex-col gap-3">
          <div className="">
            <small className="text-xs text-muted-foreground">Price</small>
            <div className="flex items-center gap-4">
              <h2>$9.99</h2>
              <span className="text-muted-foreground small-font-size">
                <s>$10.99</s>
              </span>
              <Badge className="ml-auto">{saleOffPercent}% Sale off</Badge>
            </div>
          </div>
          <ButtonGroup className="w-full">
            <Button variant="default" size="lg" className="flex-1">
              <ShoppingCart />
              <p>Add to Cart</p>
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon-lg">
              <Share />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </aside>
  );
}
