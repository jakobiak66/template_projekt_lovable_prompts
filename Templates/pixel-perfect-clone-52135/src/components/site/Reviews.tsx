import { Star } from "lucide-react";

const reviews = Array.from({ length: 9 }).map((_, i) => ({
  name: ["M. Schulz", "T. Becker", "A. Wagner", "L. Hoffmann", "K. Krüger", "S. Neumann", "P. Lange", "J. Vogel", "C. Roth"][i],
  text: "Sehr zuverlässig und freundlich. Unser Büro ist seitdem immer top sauber – klare Empfehlung!",
}));

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="bg-mint/40 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Das sagen unsere Kunden</h2>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-center text-sm text-foreground md:text-base">
          <Star className="h-4 w-4 fill-orange text-orange" aria-hidden />
          <strong className="font-semibold">5 von 5 Sternen</strong>
          <span className="text-muted-foreground">– basierend auf</span>
          <strong className="font-semibold">21 Google-Bewertungen</strong>
        </p>

        <div className="mt-5 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-background px-4 py-2 shadow-sm ring-1 ring-border">
            <GoogleG className="h-5 w-5" />
            <span className="text-sm font-semibold text-foreground">Excellent</span>
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-orange text-orange" aria-hidden />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">5.0</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl bg-background p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-deep font-bold text-foreground/80">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-orange text-orange" aria-hidden />
                      ))}
                    </div>
                  </div>
                </div>
                <GoogleG className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/search?q=PutzKraft24+Berlin+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition hover:bg-mint"
          >
            Load more
          </a>
        </div>
      </div>
    </section>
  );
}
