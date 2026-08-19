import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-forest text-white hover:bg-forest-deep border-forest",
  secondary:
    "bg-transparent text-ink border-mist hover:border-ink/40 hover:bg-cream",
  onDark:
    "bg-transparent text-white border-white/20 hover:border-white/50 hover:bg-white/5",
  light: "bg-white text-forest-deep border-white hover:bg-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
