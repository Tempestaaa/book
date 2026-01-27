"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";

const MAX_PAGES = 10;
const MIN_PAGES = 1;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setInputValue(String(newPage));
    }
  };

  const handleNext = () => {
    if (currentPage < MAX_PAGES) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setInputValue(String(newPage));
    }
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleInputBlur = () => {
    const pageNumber = parseInt(inputValue);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= MAX_PAGES) {
      setCurrentPage(pageNumber);
      setInputValue(String(pageNumber));
    } else {
      setInputValue(String(currentPage));
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  return (
    <ButtonGroup>
      <Button
        type="button"
        variant="outline"
        disabled={currentPage <= 1}
        onClick={handlePrevious}
      >
        <ArrowLeft />
      </Button>

      <div
        className={`flex items-center h-9 pr-3 border border-input bg-input/30 has-focus:ring-[3px] has-focus:ring-ring/50 transition-colors duration-300 ${currentPage === MIN_PAGES && "border-l!"}`}
      >
        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="w-10 text-center bg-transparent! border-0 focus-visible:ring-0 text-base!"
        />
        <span className="text-muted-foreground">/ {MAX_PAGES}</span>
      </div>

      <Button
        type="button"
        variant="outline"
        disabled={currentPage >= MAX_PAGES}
        onClick={handleNext}
      >
        <ArrowRight />
      </Button>
    </ButtonGroup>
  );
}
