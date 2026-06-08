type StackColumnProps = {
  title: string;
  items: { name: string; active: boolean }[];
};

export default function StackColumn({ title, items }: StackColumnProps) {
  return (
    <div style={{ textAlign: "left" }} className="stack__column">
      <div
        className="stack__column-title"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--muted)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          paddingBottom: "0.75rem",
          borderBottom: "0.5px solid var(--border-med)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </div>
      {items.map((item, idx) => (
        <div
          className="stack__item"
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.9rem",
            color: "var(--ink-soft)",
            padding: "0.4rem 0",
          }}
        >
          <div
            className={`stack__item-dot ${item.active ? "stack__item-dot--active" : ""}`.trim()}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: item.active ? "var(--rose)" : "var(--border-med)",
              flexShrink: 0,
            }}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
}
