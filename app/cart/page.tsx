import { CartRow } from "@/app/cart/components/cart-row";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import { Heart, Minus, Plus, Ticket, Trash } from "lucide-react";

export default function ShoppingCartPage() {
  const estimateDeliveryDate = dayjs()
    .add(2, "days")
    .format("dddd, DD MMMM, YYYY");

  return (
    <main className="flex min-h-[calc(100dvh-4rem)]">
      <section className="flex-1 p-4 space-y-4">
        <h4>Shopping Cart</h4>
        <ul className="flex flex-col divide-y">
          {[...Array(8)].map((_, id) => (
            <li
              key={id}
              className="flex gap-4 p-4 hover:bg-muted transition-colors duration-300"
            >
              <div className="h-24 aspect-3/4 bg-card"></div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex items-center gap-4 justify-between">
                  <p className="font-semibold">
                    Frieren: Beyond Journey's End, Vol. 1
                  </p>
                  <h4 className="">$9.99</h4>
                </div>

                <div className="small-font-size">
                  $9.99 •{" "}
                  <span className="text-green-500 font-medium">In stock</span>
                </div>

                <div className="flex items-end justify-between mt-auto">
                  <ButtonGroup className="*:h-8!">
                    <Button variant="outline">
                      <Minus />
                    </Button>
                    <Input defaultValue={1} className="text-center w-12" />
                    <Button variant="outline">
                      <Plus />
                    </Button>
                  </ButtonGroup>

                  <div className="flex items-center small-font-size">
                    <Button variant="ghost">
                      <Heart />
                      Wishlist
                    </Button>
                    <Separator orientation="vertical" className="h-4!" />
                    <Button variant="ghost">
                      <Trash />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <aside className="w-80 border-l">
        <div className="*:p-4 divide-y sticky top-20">
          <div className="flex flex-col gap-2">
            <p className="small-font-size">Delivery</p>
            <ButtonGroup>
              <Button variant="default">Free</Button>
              <Button variant="outline">Express: $100</Button>
            </ButtonGroup>
            <small className="text-muted-foreground">
              Estimate delivery date: {estimateDeliveryDate}
            </small>
          </div>

          <div className="flex flex-col gap-2">
            <p className="small-font-size">Coupon</p>
            <InputGroup>
              <InputGroupAddon>
                <Ticket />
              </InputGroupAddon>
              <InputGroupInput placeholder="Promocode" />
              <InputGroupButton className="mr-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
                Apply
              </InputGroupButton>
            </InputGroup>
            <small className="text-muted-foreground">20% off discount</small>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold">
              <CartRow label="Subtotal" price={20.99} />
            </div>
            <div className="text-muted-foreground *:text-xs">
              <CartRow label="Discount (20%)" price={20.99 * 0.2} />
              <CartRow label="Delivery" price={0} />
              <CartRow label="Tax" price={20.99 * 0.1} />
            </div>

            <div className="flex items-center justify-between large-font-size mt-1 mb-2">
              <p>Total</p>
              <p>${(20.99 - 20.99 * 0.2 - 20.0 * 0.1).toFixed(2)}</p>
            </div>

            <Button>Proceed to checkout</Button>
            <Button variant="secondary" className="mt-1">
              Continue shopping
            </Button>
          </div>
        </div>
      </aside>
    </main>
  );
}
