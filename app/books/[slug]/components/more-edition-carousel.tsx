"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function MoreEditionCarousel() {
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
      <p className="large-font-size mb-2">More editions</p>

      <CarouselContent>
        {[...Array(10)].map((_, id) => (
          <CarouselItem key={id} className="basis-1/4 space-y-2">
            <div className="h-72 bg-card"></div>
            <div className="text-xs *:leading-relaxed">
              <p>Mass Market Paperback</p>
              <p className="text-muted-foreground">Ki-oon {id + 1}</p>
              <p className="text-muted-foreground">2022</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
