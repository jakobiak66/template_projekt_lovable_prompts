import type { ReactNode } from "react";

type Feature = { title: string; desc: string };

type Props = {
  title: ReactNode;
  paragraphs: string[];
  features: Feature[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  variant?: "light" | "brand";
};

export function LeistungSection({
  title,
  paragraphs,
  features,
  image,
  imageAlt,
  imagePosition = "right",
  variant = "light",
}: Props) {
  const isBrand = variant === "brand";
  const titleColor = isBrand ? "text-brand-foreground" : "text-ink";
  const bodyColor = isBrand ? "text-brand-foreground/90" : "text-muted-foreground";
  const featureTitleColor = isBrand ? "text-brand-foreground" : "text-ink";
  const featureDescColor = isBrand ? "text-brand-foreground/85" : "text-muted-foreground";
  const sectionBg = isBrand ? "bg-brand" : "bg-background";

  const imageBlock = (
    <div className="rounded-md overflow-hidden h-full max-h-[560px] min-h-[320px]">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div>
      <h2 className={titleColor}>{title}</h2>
      <div className={`mt-6 space-y-5 text-sm md:text-base leading-relaxed ${bodyColor}`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`${sectionBg} py-16 md:py-24`}>
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 md:gap-10">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className={`${featureTitleColor} font-extrabold text-base leading-snug`}>
                {f.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${featureDescColor}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
