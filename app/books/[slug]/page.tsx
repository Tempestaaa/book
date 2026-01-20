import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Home,
  MessageCircleMore,
  Share,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import MoreEditionCarousel from "@/app/books/[slug]/components/more-edition-carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RelatedBooks from "@/app/books/[slug]/components/related-books";

const mockGenres = ["Fantasy", "Action & Adventure", "Mystery"];

const bookEdition = [
  { label: "Format", content: "188 pages, Paperback" },
  { label: "Published", content: "November 9, 2021 by VIZ Media LLC" },
  { label: "ISBN", content: "9781974725762 (ISBN10: 1974725766)" },
  { label: "Language", content: "English" },
];

const bookMoreInfo = [
  { label: "Literary awards", content: "Manga Taisho Award (2021)" },
  { label: "Original title", content: "葬送のフリーレン 1" },
  { label: "Series", content: "葬送のフリーレン [Sōsō no Frieren] (#1)" },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookDetailsPage({ params }: Props) {
  const bookSlug = (await params).slug;
  const saleOffPercent = Math.ceil(100 - (9.99 * 100) / 10.99);

  return (
    <main className="px-4 py-2 space-y-6">
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

      <section className="flex gap-8">
        <aside className="w-80 shrink-0">
          <div className="sticky top-20 space-y-3">
            <div className="h-110 bg-card rounded"></div>
            <div className="flex flex-col gap-3">
              <div className="">
                <small className="text-xs text-muted-foreground">Price</small>
                <div className="flex items-center gap-4">
                  <h2>$9.99 </h2>
                  <span className="text-muted-foreground small-font-size">
                    <s>$10.99</s>
                  </span>
                  <Badge className="ml-auto">{saleOffPercent}% Sale off</Badge>
                </div>
              </div>
              <ButtonGroup className="w-full">
                <Button variant="default" size="lg" className="flex-1">
                  <ShoppingCart />
                  <p>Add to Cart</p>
                </Button>
                <Button variant="ghost" size="icon-lg">
                  <Heart />
                </Button>
                <Button variant="ghost" size="icon-lg">
                  <Share />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </aside>

        <section className="flex-1 space-y-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-muted-foreground">
                Kanehito Yamada (Writer) , Tsukasa Abe (Illustrator)
              </p>
              <h1>Frieren: Beyond Journey's End, Vol. 1</h1>
              <h4 className="italic text-muted-foreground mt-1">
                葬送のフリーレン [Sōsō no Frieren] #1
              </h4>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <Rating rate={4} size="lg" showScore />
              <Separator orientation="vertical" className="h-6!" />
              <p className="text-muted-foreground small-font-size flex items-center gap-3">
                <MessageCircleMore className="size-4" />
                <span>1,500 reviews</span>
              </p>
              <Separator orientation="vertical" className="h-6!" />
              <p className="text-muted-foreground small-font-size flex items-center gap-3">
                <ShoppingCart className="size-4" />
                <span>3,000 solds</span>
              </p>
            </div>

            <p className="line-clamp-6 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus odio earum quibusdam dolorem ipsa, delectus nostrum?
              Culpa suscipit eum ducimus deserunt inventore fugit dolores
              officiis quia aut debitis soluta consequuntur labore eos pariatur,
              asperiores ipsum quis earum, voluptatem rerum vero magnam in
              blanditiis. Et, consectetur at repellat commodi laboriosam ad quis
              laudantium possimus natus exercitationem error voluptate
              voluptatibus modi nesciunt porro quidem veritatis beatae
              doloremque obcaecati. Delectus reiciendis veritatis facere dolor
              eligendi obcaecati blanditiis quas odio cupiditate! Eligendi,
              architecto illum? Aliquid culpa placeat nesciunt inventore soluta.
              Ad magni suscipit cupiditate fuga soluta veniam deleniti illo vel
              repellat, exercitationem blanditiis officia sequi? Adipisci
              repudiandae aspernatur quo est. Exercitationem dolores nulla enim
              inventore molestiae blanditiis voluptas error perspiciatis eaque
              id repellat omnis, delectus consequuntur? Quisquam eos debitis
              dolorum cumque sit minus libero non modi at, harum magnam saepe ab
              fugiat, eius sed inventore culpa. Expedita accusamus, aliquid
              perspiciatis quo ipsam quae amet non, illo vero ut, voluptates
              aspernatur enim impedit fuga sed ratione molestias obcaecati.
              Maxime reprehenderit debitis tempora enim est minus quod quasi ut
              quo aperiam ullam delectus eveniet nobis quas beatae, tenetur,
              earum vero qui. Corrupti quidem blanditiis recusandae? Enim vitae
              alias inventore sed maxime sapiente qui nam consectetur quibusdam.
            </p>

            <ButtonGroup className="flex flex-wrap small-font-size">
              <ButtonGroupText>Genres</ButtonGroupText>
              {mockGenres.map((g) => (
                <Button key={g} variant="outline" size="sm">
                  {g}
                </Button>
              ))}
            </ButtonGroup>

            <div className="mt-2 space-y-1 text-muted-foreground small-font-size">
              <p>188 pages, Paperback</p>
              <p>First published August 18, 2020</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 *:h-fit">
            <div className="bg-card rounded-md p-4 flex flex-col gap-1">
              <p className="large-font-size mb-2">This edition</p>
              {bookEdition.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center small-font-size"
                >
                  <p className="w-40 text-muted-foreground">{e.label}</p>
                  <p>{e.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-md p-4 flex flex-col gap-1">
              <p className="large-font-size mb-2">More infomation</p>
              {bookMoreInfo.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center small-font-size"
                >
                  <p className="w-40 text-muted-foreground">{e.label}</p>
                  <p>{e.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <MoreEditionCarousel />
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <h4>About the author</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-16">
                  <AvatarImage />
                  <AvatarFallback>VN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p>Kanehito Yamada</p>
                  <p className="small-font-size text-muted-foreground">
                    43 books, 192 followers
                  </p>
                </div>
                <Button className="rounded-full ml-auto px-8">Follow</Button>
              </div>
              <p className="small-font-size">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                iure odio eaque? Consequatur quae aspernatur tempore ad vel
                accusantium sapiente laudantium dignissimos nostrum non! Aut
                nihil accusamus temporibus saepe consectetur.
              </p>
            </div>
          </div>

          <Separator />

          <div className="overflow-hidden">
            <RelatedBooks />
          </div>

          <Separator />
        </section>
      </section>
    </main>
  );
}
