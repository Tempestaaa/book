import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Props = {
  data: string;
};

export default function FilterItem({ data }: Props) {
  return (
    <li>
      <Button variant="ghost" className="justify-between group w-full">
        <p className="small-font-size">{data}</p>
        <Check className="size-4 opacity-0 group-active:opacity-100" />
      </Button>
    </li>
  );
}
