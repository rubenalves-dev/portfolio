type StackColumnProps = {
  title: string;
  items: { name: string; active: boolean }[];
};

export default function StackColumn({ title, items }: StackColumnProps) {
  return (
    <div className="stack__column">
      <div className="stack__column-title">{title}</div>
      {items.map((item, idx) => (
        <div className="stack__item" key={idx}>
          <div
            className={`stack__item-dot ${item.active ? "stack__item-dot--active" : ""}`.trim()}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
}
