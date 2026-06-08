type StatItemProps = {
  value: string;
  label: string;
  className?: string;
  blockName?: string;
};

export default function StatItem({
  value,
  label,
  className = "",
  blockName = "hero",
}: StatItemProps) {
  return (
    <div className={className}>
      <div className={`${blockName}__stat-val`}>{value}</div>
      <div className={`${blockName}__stat-label`}>{label}</div>
    </div>
  );
}
