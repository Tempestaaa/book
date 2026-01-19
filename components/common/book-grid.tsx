import BookCard from "@/components/common/book-card";

export default function BookGrid() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
      {[...Array(12)].map((_, id) => (
        <BookCard key={id} />
      ))}
    </ul>
  );
}
