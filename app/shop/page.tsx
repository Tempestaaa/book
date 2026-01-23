import ShopFooter from "@/app/shop/components/shop-footer";
import ShopTools from "@/app/shop/components/shop-tools";
import BookGrid from "@/components/common/book-grid";
import ShopSidebar from "@/components/common/shop-sidebar";

export default function ShopPage() {
  return (
    <main className="flex">
      <ShopSidebar />

      <div className="flex-1 px-4 py-4 rounded-md space-y-6">
        <ShopTools />
        <BookGrid />
        <ShopFooter />
      </div>
    </main>
  );
}
