import NotificationButton from "@/components/common/notification-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Bell,
  KeyRound,
  LogOut,
  Search,
  ShoppingCart,
  Ticket,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navbarMenu = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

const userMenu = [
  { label: "Profile", href: "profile", icon: UserRound },
  { label: "Change Password", href: "change-password", icon: KeyRound },
  { label: "Notification", href: "notification", icon: Bell },
  { label: "Voucher", href: "voucher", icon: Ticket },
];

export default function MainNavbar() {
  return (
    <nav className="fixed top-0 left-0 h-16 w-full border-b z-50 bg-background flex items-center">
      <div className="grid grid-cols-2 h-full px-4 container mx-auto">
        <section className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/vercel.svg" alt="Logo" width={24} height={24} />
            <h3>Chill&apos;n&apos;Spine</h3>
          </Link>
          <Separator orientation="vertical" />
          <NavigationMenu>
            <NavigationMenuList>
              {navbarMenu.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      <p className="small-font-size p-1">{item.label}</p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </section>
        <section className="flex items-center justify-end gap-4">
          <ButtonGroup>
            <Button variant="ghost" size="icon-lg">
              <Search />
            </Button>
            <NotificationButton />
            <Button variant="ghost" size="icon-lg" asChild>
              <Link href="/cart">
                <ShoppingCart />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-lg">
              <ModeSwitchIcon />
            </Button>
          </ButtonGroup>
          <Separator orientation="vertical" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="gap-3">
                <p className="small-font-size">Username</p>
                <UserRound />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="p-1 w-60 flex flex-col bg-background"
            >
              <div className="flex items-center gap-2 p-1">
                <Avatar className="size-10">
                  <AvatarImage />
                  <AvatarFallback>VN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="small-font-size">Username</p>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 rounded-full">
                    <Award className="size-2.5" />
                    <span>Silver member</span>
                  </div>
                </div>
              </div>
              <Separator className="my-1 px-1" />
              <menu className="space-y-1 bg-card p-1 rounded-md">
                {userMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={`/user/${item.href}`}
                      className="flex items-center gap-4 py-2 px-3 rounded hover:bg-muted"
                    >
                      <Icon className="size-3.5" />
                      <p className="small-font-size">{item.label}</p>
                    </Link>
                  );
                })}
              </menu>
              <Separator className="my-1 px-1" />
              <button className="flex items-center gap-4 py-2 px-3 rounded hover:bg-red-600/20 text-red-600">
                <LogOut className="size-3.5" />
                <p className="small-font-size">Logout</p>
              </button>
            </PopoverContent>
          </Popover>
        </section>
      </div>
    </nav>
  );
}

const ModeSwitchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4.5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 9l4.65 -4.65" />
      <path d="M12 14.3l7.37 -7.37" />
      <path d="M12 19.6l8.85 -8.85" />
    </svg>
  );
};
