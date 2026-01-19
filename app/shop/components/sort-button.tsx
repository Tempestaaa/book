"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ClockArrowDown, Flame, SortAsc, SortDesc } from "lucide-react";
import { useState } from "react";

const sortOptions = [
  { label: "Newest", value: "latest", icon: ClockArrowDown },
  { label: "Best sellers", value: "hot", icon: Flame },
  { label: "Rating: High to Low", value: "rating-desc", icon: SortDesc },
  { label: "Rating: Low to High", value: "rating-asc", icon: SortAsc },
];

export default function SortButton() {
  const [option, setOption] = useState(sortOptions[0]);
  const Icon = option.icon;
  const isActive = (value: string) => value === option.value;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="w-fit px-4">
          <span>Sort: </span>
          <Icon />
          <span>{option.label}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-60 p-2">
        <ul className="space-y-1">
          {sortOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <li
                key={opt.value}
                value={opt.value}
                onClick={() => setOption(opt)}
                className={`p-2 rounded-md hover:bg-muted transition-colors duration-300 flex items-center gap-4 cursor-pointer ${isActive(opt.value) && "bg-muted"}`}
              >
                <Icon className="size-4" />
                <p className="small-font-size">{opt.label}</p>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
