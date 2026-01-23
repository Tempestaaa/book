import InfoSection from "@/app/books/[slug]/components/info-section";

const BOOK_DETAILS = {
  edition: [
    { label: "Format", content: "188 pages, Paperback" },
    { label: "Published", content: "November 9, 2021 by VIZ Media LLC" },
    { label: "ISBN", content: "9781974725762 (ISBN10: 1974725766)" },
    { label: "Language", content: "English" },
  ],
  moreInfo: [
    { label: "Literary awards", content: "Manga Taisho Award (2021)" },
    { label: "Original title", content: "葬送のフリーレン 1" },
    { label: "Series", content: "葬送のフリーレン [Sōsō no Frieren] (#1)" },
  ],
};

export default function DetailedSpecifications() {
  return (
    <div className="space-y-4">
      <InfoSection title="This edition" items={BOOK_DETAILS.edition} />
      <InfoSection title="More information" items={BOOK_DETAILS.moreInfo} />
    </div>
  );
}
