import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import Link from "next/link";
import MoreEditionCarousel from "@/app/books/[slug]/components/more-edition-carousel";
import RelatedBooks from "@/app/books/[slug]/components/related-books";
import BookSidebar from "@/app/books/[slug]/components/book-sidebar";
import BookDetails from "@/app/books/[slug]/components/book-details";
import DetailedSpecifications from "@/app/books/[slug]/components/detailed-specifications";
import AuthorSection from "@/app/books/[slug]/components/author-section";
import CommunityReview from "@/app/books/[slug]/components/community-review";
import ReviewList from "@/app/books/[slug]/components/review-list";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookDetailsPage({ params }: Props) {
  const bookSlug = (await params).slug;

  return (
    <main className="px-4 py-2 space-y-2">
      <Breadcrumb className="h-10 flex items-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">
                <Home className="size-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/shop?g=adventure">Adventure</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{bookSlug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex flex-col lg:flex-row gap-12">
        <BookSidebar price={9.99} originalPrice={10.99} />

        <section className="flex-1 flex flex-col gap-6 overflow-x-auto">
          <BookDetails />
          <DetailedSpecifications />
          <MoreEditionCarousel />
          <Separator />
          <AuthorSection />
          <Separator />
          <RelatedBooks />
          <Separator />
          <CommunityReview />
          <ReviewList />
        </section>
      </section>
    </main>
  );
}
