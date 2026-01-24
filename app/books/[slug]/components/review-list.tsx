import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, MessageCircleMore, Star, ThumbsUp } from "lucide-react";
import dayjs from "dayjs";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export default function ReviewList() {
  return (
    <div className="pb-2 flex flex-col gap-4">
      <ul className="flex flex-col divide-y">
        {[...Array(5)].map((_, id) => (
          <div key={id} className="flex gap-6 py-4">
            <Avatar className="size-14">
              <AvatarImage />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>

            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="">Username</p>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="size-3 text-yellow-500 fill-yellow-500" />
                  <span>5</span>
                  <span className="mx-1">•</span>
                  <p>{dayjs().format("DD MMMM, YYYY")}</p>
                </div>
              </div>

              <p className="line-clamp-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio recusandae reprehenderit corporis explicabo, sequi
                id, omnis at dolore voluptas soluta accusamus obcaecati officia
                eveniet error est ullam maxime quos dolores!
              </p>

              <div className="small-font-size text-muted-foreground mt-2 mb-1">
                10 likes • 20 comments
              </div>

              <ButtonGroup>
                <Button variant="ghost">
                  <ThumbsUp />
                </Button>
                <Button variant="ghost">
                  <MessageCircleMore />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        ))}
      </ul>

      <Button variant="ghost" className="w-fit self-center px-6! font-semibold">
        More reviews and ratings
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
