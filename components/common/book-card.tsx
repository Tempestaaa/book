import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Rating } from "@/components/ui/rating";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard() {
  return (
    <div className="overflow-hidden hover:bg-muted transition-colors duration-300">
      <Link href="/books/123" className="h-110 block relative bg-card">
        {/* <Image src="/test.jpg" alt="Book's cover" fill /> */}
      </Link>

      <div className="p-2">
        <Link href="/author/123">
          <small className="text-xs text-muted-foreground hover-text">
            Author
          </small>
        </Link>
        <Link href="/books/123">
          <p className="large-font-size line-clamp-1 hover-text">
            Frieren: Beyond the Journey&apos;s End
          </p>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <Rating rate={4} showScore />
          <p className="text-xs text-muted-foreground">999 solds</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="">
            <small className="text-xs text-muted-foreground">Price</small>
            <h4>
              $9.99{" "}
              <span className="text-xs text-muted-foreground">
                <s>$10.99</s>
              </span>
            </h4>
          </div>
          <ButtonGroup>
            <Button
              variant="ghost"
              className="hover:bg-foreground! hover:text-muted!"
            >
              <Heart />
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-foreground! hover:text-muted!"
            >
              <ShoppingCart />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
