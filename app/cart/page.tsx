import { CartRow } from "@/app/cart/components/cart-row";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import dayjs from "dayjs";
import { Ticket } from "lucide-react";

export default function ShoppingCartPage() {
  const estimateDeliveryDate = dayjs()
    .add(2, "days")
    .format("dddd, DD MMMM, YYYY");

  return (
    <main className="flex">
      <section className="flex-1 p-4">
        <h4>Shopping Cart</h4>
      </section>

      <aside className="w-80 border-l *:p-4 divide-y">
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
      </aside>
    </main>
  );
}
