const partners = ["IHK Berlin", "BNI", "Innung", "igefa", "Kärcher", "TÜV"];

export function Partners() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-x-16 pr-16">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap text-sm font-bold text-muted-foreground/80"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
