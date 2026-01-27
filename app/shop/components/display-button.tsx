"use client";

import { Button } from "@/components/ui/button";
import { Grid, Menu } from "lucide-react";
import { useState } from "react";

export default function DisplayButton() {
  const [isDisplayGrid, setIsDisplayGrid] = useState(true);

  return (
    <Button variant="ghost" onClick={() => setIsDisplayGrid(!isDisplayGrid)}>
      {isDisplayGrid ? <Grid /> : <Menu />}
    </Button>
  );
}
