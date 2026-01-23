import FilterItem from "@/app/shop/components/filter-item";
import FilterWrapper from "@/app/shop/components/filter-wrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

const bookGenres = [
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Action & Adventure",
  "Mystery",
  "Horror",
  "Thriller & Suspense",
  "Historical Fiction",
  "Romance",
  "Contemporary Fiction",
  "Literary Fiction",
  "Magical Realism",
  "Graphic Novel",
  "Short Story",
  "Young Adult",
  "Children’s",
  "Biography",
  "Autobiography",
  "Memoir",
  "True Crime",
  "Self-Help",
  "Health & Wellness",
  "History",
  "Travel",
  "Science & Technology",
  "Philosophy",
  "Religion & Spirituality",
  "Cookbooks",
  "Art & Photography",
  "Essays",
  "Parenting",
  "Humor",
];

const bookFormats = ["Hardcover", "Ebook", "Paperback", "Audiobook"];

const bookPublishers = [
  "Penguin Random House",
  "HarperCollins",
  "Simon & Schuster",
  "Hachette Livre",
  "Macmillan Publishers",
  "Scholastic",
  "Bloomsbury",
  "Pearson",
  "Oxford University Press",
  "Cambridge University Press",
  "Wiley",
  "Houghton Mifflin Harcourt",
  "Kensington Publishing",
  "Chronicle Books",
  "Sourcebooks",
];

const bookLanguages = ["English", "Vietnamese", "Chinese", "Japanese"];

export default function ShopSidebar() {
  return (
    <aside className="basis-80 has-[input:first-of-type:checked]:basis-0 border-r has-[input:first-of-type:checked]:border-0 h-[calc(100dvh-4rem)] sticky top-16 divide-y overflow-auto transition-all duration-300">
      <input type="checkbox" id="shop-sidebar" className="sr-only" />
      <FilterWrapper label="Genres">
        <ScrollArea className="h-72">
          <ul className="bg-card rounded-md p-1">
            {bookGenres.map((genre) => (
              <FilterItem key={genre} data={genre} />
            ))}
          </ul>
          <ScrollBar />
        </ScrollArea>
      </FilterWrapper>

      <FilterWrapper label="Price range">
        <Slider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          step={10}
          className="pt-2 mb-4"
        />
        <p className="small-font-size text-muted-foreground">
          Set your budget range ($0-$100)
        </p>
      </FilterWrapper>

      <FilterWrapper label="Format">
        <ul className="bg-card rounded-md p-1">
          {bookFormats.map((format) => (
            <FilterItem key={format} data={format} />
          ))}
        </ul>
      </FilterWrapper>

      <FilterWrapper label="Publishers">
        <ScrollArea className="h-72">
          <ul className="bg-card rounded-md p-1">
            {bookPublishers.map((p) => (
              <FilterItem key={p} data={p} />
            ))}
          </ul>
          <ScrollBar />
        </ScrollArea>
      </FilterWrapper>

      <FilterWrapper label="Language">
        <ul className="bg-card rounded-md p-1">
          {bookLanguages.map((language) => (
            <FilterItem key={language} data={language} />
          ))}
        </ul>
      </FilterWrapper>

      <FilterWrapper label="Availability">
        <Label className="gap-4">
          <Checkbox />
          <p>In stock</p>
        </Label>
      </FilterWrapper>
    </aside>
  );
}
