import ShopSidebar from "@/components/common/shop-sidebar";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Rating } from "@/components/ui/rating";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Grid,
  Heart,
  ShoppingCart,
  SortDesc,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="flex">
      <ShopSidebar />

      <div className="flex-1 px-4 py-6 rounded-md space-y-6">
        <section className="flex items-center justify-between">
          <ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" size="icon-lg">
                <ChevronLeft />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost" size="icon-lg">
                <Grid />
              </Button>
              <Button variant="ghost" size="icon-lg">
                <SortDesc />
              </Button>
            </ButtonGroup>
            <ButtonGroup className="sr-only">
              <Button variant="ghost" className="hover:bg-red-600! h-10">
                Clear all
              </Button>
            </ButtonGroup>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline" size="icon-lg" disabled>
              <ArrowLeft />
            </Button>
            <InputGroup className="border-l! w-23 h-10">
              <InputGroupInput defaultValue={1} className="text-center" />
              <InputGroupAddon align="inline-end">/10</InputGroupAddon>
            </InputGroup>
            <Button variant="outline" size="icon-lg">
              <ArrowRight />
            </Button>
          </ButtonGroup>
        </section>

        <ul className="grid grid-cols-3 gap-6">
          {[...Array(12)].map((_, id) => (
            <div key={id} className="overflow-hidden">
              <Link href="#" className="h-125 block relative">
                <Image src="/test.jpg" alt="Book's cover" fill />
              </Link>
              <div className="py-2">
                <Link href="#">
                  <small className="text-xs text-muted-foreground hover-text">
                    Author
                  </small>
                </Link>
                <Link href="#">
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
                    <small className="text-xs text-muted-foreground">
                      Price
                    </small>
                    <h4>
                      $9.99{" "}
                      <span className="text-xs text-muted-foreground">
                        <s>$10.99</s>
                      </span>
                    </h4>
                  </div>
                  <ButtonGroup>
                    <Button variant="ghost">
                      <ShoppingCart />
                    </Button>
                    <Button variant="ghost">
                      <Heart />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </ul>

        <section className="flex items-center justify-between">
          <ButtonGroup className="h-10">
            <ButtonGroupText>Showing 12 out of 120 books</ButtonGroupText>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline" size="icon-lg" disabled>
              <ArrowLeft />
            </Button>
            <InputGroup className="border-l! w-23 h-10">
              <InputGroupInput defaultValue={1} className="text-center" />
              <InputGroupAddon align="inline-end">/10</InputGroupAddon>
            </InputGroup>
            <Button variant="outline" size="icon-lg">
              <ArrowRight />
            </Button>
          </ButtonGroup>
        </section>
      </div>
    </main>
  );
}
