import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AuthorSection() {
  return (
    <section className="space-y-2">
      <h4>About the author</h4>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-14 border">
            <AvatarImage src="/path-to-author.jpg" />
            <AvatarFallback>KY</AvatarFallback>
          </Avatar>

          <div className="space-y-0.5">
            <p className="font-bold text-lg">Kanehito Yamada</p>
            <p className="small-font-size text-muted-foreground">
              43 books • 192 followers
            </p>
          </div>

          <Button className="rounded-full ml-auto px-8" variant="outline">
            Follow
          </Button>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Kanehito Yamada is the creator of Frieren: Beyond Journey's End. His
          work focuses on themes of time, mortality, and human connection.
        </p>
      </div>
    </section>
  );
}
