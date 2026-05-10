const logos = ["IKON", "ASSA ABLOY", "ABUS", "BKS", "PayPal", "VISA"];

export function TrustLogos() {
  return (
    <section className="bg-brand text-brand-foreground py-10">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((l) => (
          <span
            key={l}
            className="text-xl md:text-2xl font-extrabold tracking-wider opacity-95"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
