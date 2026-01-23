import { Button } from "@/components/ui/button";

type Props = {
  data: string;
};

export default function FilterItem({ data }: Props) {
  return (
    <Button variant="ghost" className="group w-full rounded justify-start">
      <p className="small-font-size">{data}</p>
    </Button>
  );
}
