import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import { MessageCircleMore, ShoppingCart } from "lucide-react";

const MOCK_GENRES = ["Fantasy", "Action & Adventure", "Mystery"];

export default function BookDetails() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-sm">
          Kanehito Yamada (Writer) • Tsukasa Abe (Illustrator)
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
          Frieren: Beyond Journey's End, Vol. 1
        </h1>

        <h4 className="italic text-muted-foreground mt-1">
          葬送のフリーレン [Sōsō no Frieren] #1
        </h4>
      </div>

      <div className="flex items-center gap-4 py-2">
        <Rating rate={4} size="lg" showScore />

        <Separator orientation="vertical" className="h-6!" />

        <div className="flex items-center gap-2 text-muted-foreground small-font-size">
          <MessageCircleMore className="size-4" /> 1,500 reviews
        </div>

        <Separator orientation="vertical" className="h-6!" />

        <div className="flex items-center gap-2 text-muted-foreground small-font-size">
          <ShoppingCart className="size-4" /> 3,000 sold
        </div>
      </div>

      <p className="text-pretty leading-relaxed line-clamp-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet.
        Impedit eius neque soluta sed reprehenderit explicabo aut ullam rerum,
        earum cupiditate ipsum tempore fugit. Praesentium reprehenderit quo
        quod. Cupiditate officiis obcaecati vero error minima praesentium
        doloremque itaque recusandae iste excepturi autem architecto facere in
        quo, ipsa est enim sed omnis quaerat incidunt? Magnam, a! Maxime nam
        soluta hic, debitis pariatur amet ducimus, est, aliquid unde autem
        blanditiis ex velit voluptatum minus inventore officia repellendus! Id
        officia dolores asperiores architecto ex dolore porro itaque temporibus
        maxime ullam nisi nostrum in, fugit qui? Provident cupiditate cumque
        repellendus animi neque autem, nostrum pariatur corporis accusantium eos
        quod libero facilis facere ducimus reiciendis. Asperiores impedit
        officia alias fuga nihil voluptates reiciendis, tenetur illum ab minima
        corrupti dicta quae accusamus autem, ipsam nostrum at. Minima ad itaque
        corporis harum, dolorum doloribus ullam pariatur deleniti iste quos
        quasi id sequi necessitatibus tenetur repellendus corrupti explicabo.
        Optio, libero! Quos, temporibus quas illo voluptatum enim quibusdam qui,
        recusandae doloremque voluptatibus quo odit ratione quisquam rem
        voluptate, praesentium non! Blanditiis, voluptatem, quidem neque itaque
        enim eligendi, porro dolores necessitatibus vitae quisquam aliquam
        saepe? Accusamus at, aut odio natus sed quod eligendi possimus autem
        iste exercitationem est, fugit velit!
      </p>

      <ButtonGroup className="flex flex-wrap mt-3">
        <ButtonGroupText>Genres</ButtonGroupText>
        {MOCK_GENRES.map((genre) => (
          <Button
            key={genre}
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            {genre}
          </Button>
        ))}
      </ButtonGroup>

      <div className="text-muted-foreground small-font-size">
        <p>188 pages, Paperback</p>
        <p>First published August 18, 2020</p>
      </div>
    </div>
  );
}
