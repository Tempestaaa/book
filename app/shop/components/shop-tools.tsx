import DisplayButton from "@/app/shop/components/display-button";
import SortButton from "@/app/shop/components/sort-button";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import Pagination from "@/components/ui/pagination";
import { Filter } from "lucide-react";

export default function ShopTools() {
  return (
    <section className="flex items-center justify-between">
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="ghost" asChild>
            <label htmlFor="shop-sidebar" className="cursor-pointer">
              <Filter />
            </label>
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <DisplayButton />
          <SortButton />
        </ButtonGroup>
        <ButtonGroup className="sr-only">
          <Button
            variant="ghost"
            className="text-red-500 hover:bg-red-500/30! hover:ring-2 hover:ring-red-500"
          >
            Clear all filters (1)
          </Button>
        </ButtonGroup>
      </ButtonGroup>

      <Pagination />
    </section>
  );
}
