import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function FilterWrapper({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2 p-2">
      <div className="flex items-center justify-between h-9">
        <p className="large-font-size uppercase">{label}</p>
        <Button variant="link" className="small-font-size text-red-500 sr-only">
          Clear
        </Button>
      </div>
      <div className="mb-2">{children}</div>
    </div>
  );
}
