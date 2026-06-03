export function MarkerHighlight({
  children,
  size = "default",
  color = "cyan",
}: {
  children: React.ReactNode;
  size?: "default" | "lg";
  color?: "cyan" | "yellow";
}) {
  const classes = [
    "marker-highlight",
    size === "lg" && "marker-highlight-lg",
    color === "yellow" && "marker-yellow",
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
