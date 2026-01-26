import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, CheckCheck, MoreHorizontal } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

dayjs.extend(relativeTime);

interface iNotification {
  id: string;
  title: string;
  description: string;
  isRead: boolean;
  createdAt: string;
}

const notificationStatus = ["all", "unread"];

const MOCK_NOTIFICATIONS: iNotification[] = [
  {
    id: "1",
    title: "Order Shipped! 🚚",
    description:
      "Your book 'The Midnight Library' is on its way and will arrive shortly.",
    createdAt: "2024-05-23T10:30:00Z",
    isRead: false,
  },
  {
    id: "2",
    title: "New Arrival: Haruki Murakami 📚",
    description:
      "The latest masterpiece from Murakami is now available in hardcover. Grab your copy!",
    createdAt: "2024-05-22T15:45:00Z",
    isRead: true,
  },
  {
    id: "3",
    title: "Exclusive Discount 🎟️",
    description:
      "Enjoy 20% OFF on all Classic Literature this weekend. Use code: BOOKWORM20",
    createdAt: "2024-05-21T09:00:00Z",
    isRead: false,
  },
];

export default function NotificationButton() {
  const timeAgo = (time: string) => dayjs(time).fromNow();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <Bell />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="center"
        className="w-lg bg-background flex flex-col py-2 px-4"
      >
        <div className="flex items-center justify-between">
          <p className="large-font-size">Notification</p>
          <Button variant="ghost" className="text-muted-foreground">
            <CheckCheck />
            Mark as read all
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="*:px-3 bg-transparent">
            {notificationStatus.map((s) => (
              <TabsTrigger key={s} value={s} className="capitalize">
                {s}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="">
            {notificationStatus.map((status) => {
              const filtered =
                status === "all"
                  ? MOCK_NOTIFICATIONS
                  : MOCK_NOTIFICATIONS.filter((item) => !item.isRead);
              return (
                <TabsContent key={status} value={status}>
                  <ul className="space-y-2">
                    {filtered.length > 0 ? (
                      filtered.map((item) => (
                        <li
                          key={item.id}
                          className={`flex gap-4 p-2 rounded-md ${!item.isRead && "bg-muted/30"}`}
                        >
                          <Avatar className="size-14">
                            <AvatarImage />
                            <AvatarFallback>VN</AvatarFallback>
                          </Avatar>
                          <div className="">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm">{item.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {timeAgo(item.createdAt)}
                            </p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div className="py-12 text-center">
                        No notifications in {status} category.
                      </div>
                    )}
                  </ul>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
