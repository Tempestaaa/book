"use client";

import BookCard from "@/components/common/book-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      className="w-screen"
    >
      <p className="large-font-size mb-2">More edition</p>

      <CarouselContent>
        {[...Array(10)].map((_, id) => (
          <CarouselItem key={id} className="basis-1/6">
            {/* <BookCard /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
