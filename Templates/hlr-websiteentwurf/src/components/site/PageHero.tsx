import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  subtitle?: string;
  actions?: { label: string; href: string; variant: "primary" | "outline" }[];
  backgroundImage?: string;
  backgroundAlt?: string;
  variant?: "image" | "geometric";
  overlayOpacity?: number;
};

export function PageHero({
  title,
  subtitle,
  actions,
  backgroundImage = "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1920&q=80",
  backgroundAlt = "",
  variant = "image",
  overlayOpacity = 45,
}: Props) {
  const centered = !subtitle;
  return (
    <section className="relative h-[280px] md:h-[340px] overflow-hidden bg-ink">
      {variant === "image" ? (
        <>
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-ink"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      ) : (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.18 0.02 250) 0%, oklch(0.22 0.03 250) 60%, oklch(0.28 0.06 50) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div
            className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
            style={{ background: "var(--brand, #f97316)" }}
          />
        </div>
      )}
      <div className="relative container-page h-full flex items-center">
        {centered ? (
          <div className="w-full text-center">
            <h1 className="text-brand-foreground">{title}</h1>
            {actions && actions.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3 justify-center">
                {actions.map((a) =>
                  a.variant === "primary" ? (
                    <a key={a.label} href={a.href} className="inline-flex items-center bg-brand hover:bg-brand-dark text-brand-foreground text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">{a.label}</a>
                  ) : a.href.startsWith("/") ? (
                    <Link key={a.label} to={a.href} className="inline-flex items-center border border-brand-foreground/80 text-brand-foreground hover:bg-brand-foreground hover:text-ink text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">{a.label}</Link>
                  ) : (
                    <a key={a.label} href={a.href} className="inline-flex items-center border border-brand-foreground/80 text-brand-foreground hover:bg-brand-foreground hover:text-ink text-sm font-semibold px-5 py-2.5 rounded-md transition-colors">{a.label}</a>
                  ),
                )}
              </div>
            )}
          </div>
        ) : (
        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          <h1 className="text-brand-foreground">{title}</h1>
          <div>
            <p className="text-brand-foreground/90 text-sm md:text-base leading-relaxed max-w-md">
              {subtitle}
            </p>
            {actions && actions.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {actions.map((a) =>
                  a.variant === "primary" ? (
                    <a
                      key={a.label}
                      href={a.href}
                      className="inline-flex items-center bg-brand hover:bg-brand-dark text-brand-foreground text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                    >
                      {a.label}
                    </a>
                  ) : a.href.startsWith("/") ? (
                    <Link
                      key={a.label}
                      to={a.href}
                      className="inline-flex items-center border border-brand-foreground/80 text-brand-foreground hover:bg-brand-foreground hover:text-ink text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                    >
                      {a.label}
                    </Link>
                  ) : (
                    <a
                      key={a.label}
                      href={a.href}
                      className="inline-flex items-center border border-brand-foreground/80 text-brand-foreground hover:bg-brand-foreground hover:text-ink text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                    >
                      {a.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
