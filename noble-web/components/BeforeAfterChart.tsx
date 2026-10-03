type ChartRow = {
  label: string;
  before: number | null;
  after: number | null;
  note?: string;
};

function barWidth(value: number, max: number) {
  if (max <= 0) return 0;
  return Math.max(8, Math.round((value / max) * 100));
}

export function BeforeAfterChart({
  title,
  rows,
}: {
  title: string;
  rows: ChartRow[];
}) {
  const usable = rows.filter((row) => row.before != null || row.after != null);
  if (!usable.length) {
    return (
      <p className="text-sm text-stone">
        [PLACEHOLDER: before/after metrics for the tracked keyword set]
      </p>
    );
  }

  return (
    <div>
      <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-stone">
        Average position can be distorted by new keywords, so we track a fixed
        set. Lower average position is better.
      </p>
      <div className="mt-6 grid gap-5">
        {usable.map((row) => {
          const values = [row.before, row.after].filter(
            (value): value is number => value != null,
          );
          const max = Math.max(...values, 1);
          return (
            <div key={row.label}>
              <p className="text-sm font-medium">{row.label}</p>
              {row.note ? (
                <p className="mt-1 text-xs text-stone">{row.note}</p>
              ) : null}
              <div className="mt-2 grid gap-2">
                <Bar
                  label="Before"
                  value={row.before}
                  width={row.before == null ? 0 : barWidth(row.before, max)}
                />
                <Bar
                  label="After"
                  value={row.after}
                  width={row.after == null ? 0 : barWidth(row.after, max)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  width,
}: {
  label: string;
  value: number | null;
  width: number;
}) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr_3.5rem] items-center gap-3 text-sm">
      <span className="text-stone">{label}</span>
      <div className="h-2 rounded-full bg-mist">
        {value == null ? null : (
          <div
            className="h-2 rounded-full bg-forest"
            style={{ width: `${width}%` }}
          />
        )}
      </div>
      <span className="text-right font-medium tabular-nums">
        {value == null ? "—" : value}
      </span>
    </div>
  );
}
