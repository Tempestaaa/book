import RatingSection from "@/app/books/[slug]/components/rating-section";

const ratings = { 5: 800, 4: 400, 3: 200, 2: 100, 1: 0 };

export default function CommunityReview() {
  const formattedRatingArray = Object.entries(ratings)
    .map(([star, count]) => ({
      star: Number(star),
      count,
    }))
    .sort((a, b) => b.star - a.star);
  const totalRatings = Object.entries(ratings).reduce((acc, obj) => {
    return acc + obj[1];
  }, 0);
  const widthPercent = (count: number) =>
    parseFloat(((count / totalRatings) * 100).toFixed(2));

  return (
    <div className="flex flex-col gap-1">
      <h4>Community Reviews</h4>
      <RatingSection />
      <ul className="p-1 space-y-4 mt-1">
        {formattedRatingArray.map((item) => (
          <li
            key={item.star}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <p className="w-20">
              {item.star} {item.star > 1 ? "stars" : "star"}
            </p>
            <div className="w-xl bg-muted rounded-full overflow-hidden">
              <div
                style={{ width: `${widthPercent(item.count)}%` }}
                className="h-7 rounded-r-full bg-yellow-500"
              />
            </div>
            <p className="text-muted-foreground small-font-size">
              {item.count} ({widthPercent(item.count)}%)
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
