import { Flame, Droplets, Wind, Sun, Waves, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import familieImg from "@/assets/familie-leistungen.png";

const items = [
  {
    icon: Flame,
    title: "Heizungstechnik",
    desc: "Energiesparende Wohlfühlräume durch moderne Heiz- und Brennwerttechnik.",
    href: "/leistungen/heizungstechnik",
  },
  {
    icon: Droplets,
    title: "Bad & Sanitär",
    desc: "Vom Komplettbad bis zur Reparatur – Komfort und Funktion aus einer Hand.",
    href: "/leistungen/bad-und-sanitaerinstallation",
  },
  {
    icon: Wind,
    title: "Wohnraumlüftung",
    desc: "Frische, gefilterte Luft mit bis zu 90 % Wärmerückgewinnung.",
    href: "/leistungen/wohnraumlueftung",
  },
  {
    icon: Sun,
    title: "Solartechnik",
    desc: "Photovoltaik & Solarthermie – emissionsschonend und wirtschaftlich.",
    href: "/leistungen/solartechnik",
  },
  {
    icon: Waves,
    title: "Wasseraufbereitung",
    desc: "Enthärtung und Filtration für sauberes, weiches Wasser im ganzen Haus.",
    href: "/leistungen/wasseraufbereitung",
  },
];

export function Services() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
        {/* Left: content */}
        <div>
          <span className="inline-flex items-center gap-2 text-white/90 text-xs font-semibold tracking-wide mb-4">
            Unsere Leistungen im Überblick
          </span>
          <h2 className="text-white max-w-2xl">
            Zuverlässiger Service rund um
            <br />
            Heizung, Sanitär und Energie.
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {items.map((it) => (
              <div key={it.title} className="flex flex-col">
                <it.icon
                  size={36}
                  className="text-white mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-extrabold text-lg leading-snug">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  {it.desc}
                </p>
                <Link
                  to={it.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white border-b border-white/40 hover:border-white pb-0.5 self-start transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: full-bleed image with CTA */}
        <div className="relative min-h-[320px] lg:min-h-[480px] rounded-lg overflow-hidden">
          <img
            src={familieImg}
            alt="Familie genießt modernes Zuhause mit smarter Heizungssteuerung"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
