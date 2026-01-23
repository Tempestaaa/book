type Props = {
  title: string;
  items: { label: string; content: string }[];
};

export default function InfoSection({ title, items }: Props) {
  return (
    <div className="bg-card rounded-md p-4 flex flex-col gap-1">
      <p className="large-font-size mb-1 font-semibold">{title}</p>

      {items.map((item) => (
        <div key={item.label} className="flex items-center small-font-size">
          <p className="w-52 text-muted-foreground">{item.label}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
