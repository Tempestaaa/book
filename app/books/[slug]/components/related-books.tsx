"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function RelatedBooks() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-full"
    >
      <p className="large-font-size mb-2">Related books</p>

      <CarouselContent>
        {[...Array(10)].map((_, id) => (
          <CarouselItem key={id} className="basis-1/4 space-y-2">
            <div className="h-72 bg-card relative">
              <ButtonGroup className="absolute bottom-2 right-2">
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

            <div className="flex flex-col gap-1">
              <Link href="/author/123">
                <small className="text-xs text-muted-foreground hover-text">
                  Author
                </small>
              </Link>
              <Link href="/books/123">
                <p className="line-clamp-1 hover-text small-font-size">
                  Frieren: Beyond the Journey&apos;s End
                </p>
              </Link>
              <div className="flex items-end">
                <div className="">
                  <small className="text-xs text-muted-foreground">Price</small>
                  <h4>
                    $9.99{" "}
                    <span className="text-xs text-muted-foreground">
                      <s>$10.99</s>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
