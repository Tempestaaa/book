import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import Pagination from "@/components/ui/pagination";

export default function ShopFooter() {
  return (
    <section className="flex items-center justify-between">
      <ButtonGroup className="h-10">
        <ButtonGroupText>Showing 12 out of 120 books</ButtonGroupText>
      </ButtonGroup>

      <Pagination />
    </section>
  );
}
