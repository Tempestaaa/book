import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  DollarSign,
  Globe,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navbarMenu = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

export default function MainNavbar() {
  return (
    <nav className="fixed top-0 left-0 h-16 w-full grid grid-cols-2 *:h-full px-4 border-b z-50 bg-background">
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
          <Button variant="ghost" size="icon-lg">
            <Bell />
          </Button>
          <Button variant="ghost" size="icon-lg">
            <ShoppingCart />
          </Button>
          <Button variant="ghost" size="icon-lg">
            <DollarSign />
          </Button>
          <Button variant="ghost" size="icon-lg">
            <Globe />
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
        </Popover>
      </section>
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
