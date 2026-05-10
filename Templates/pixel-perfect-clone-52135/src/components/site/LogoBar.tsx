const logos = ["Acme GmbH", "Berlin Tech", "Nordwerk", "Capitol AG", "Langblock", "Vertex"];

export function LogoBar() {
  return (
    <section className="border-y border-border bg-background py-8">
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
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={`${l}-${i}`}
              className="whitespace-nowrap text-base font-bold tracking-tight text-muted-foreground/70 grayscale"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
