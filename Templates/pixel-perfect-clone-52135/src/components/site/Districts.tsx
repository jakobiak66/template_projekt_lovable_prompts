import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";

const districts = [
  { name: "Charlottenburg", to: "/leistungen/bueroreinigung-charlottenburg", img: "https://images.unsplash.com/photo-1599689019338-2f7e1cb0a4f8?auto=format&fit=crop&w=800&q=70" },
  { name: "Mitte", to: "/leistungen/bueroreinigung-mitte", img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=70" },
  { name: "Kreuzberg", to: "/leistungen/bueroreinigung-kreuzberg", img: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?auto=format&fit=crop&w=800&q=70" },
  { name: "Prenzlauer Berg", to: "/leistungen/bueroreinigung-prenzlauerberg", img: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=800&q=70" },
  { name: "Friedrichshain", to: "/leistungen/bueroreinigung-friedrichshain", img: "https://images.unsplash.com/photo-1554072675-66db59dba46f?auto=format&fit=crop&w=800&q=70" },
  { name: "Schöneberg", to: "/leistungen/bueroreinigung-schoeneberg", img: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=70" },
] as const;

export function Districts() {
  return (
    <section id="bezirke" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Aus welchem Bezirk kommen Sie?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          PutzKraft24 ist in ganz Berlin für Sie da. Wählen Sie Ihren Bezirk und erfahren Sie mehr über unseren Service vor Ort:
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-2">
          {/* 6 Bezirke: 3 oben, 3 unten – jeweils Spalten 1–3 */}
          {districts.map((d, i) => (
            <Link
              key={d.name}
              to={d.to}
              className={`group relative block overflow-hidden rounded-2xl shadow-sm ${
                i < 3 ? "md:col-start-" + (i + 1) + " md:row-start-1" : "md:col-start-" + (i - 2) + " md:row-start-2"
              }`}
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src={d.img}
                alt={`Büroreinigung in ${d.name}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-background">
                <div className="flex items-center gap-2 text-base font-semibold">
                  <MapPin className="h-4 w-4" />
                  <span>{d.name}</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
                <p className="mt-1 text-xs italic text-background/85">Büroreinigung</p>
              </div>
            </Link>
          ))}

          {/* CTA-Kachel rechts, über beide Reihen */}
          <Link
            to="/kontakt"
            className="group relative block overflow-hidden rounded-2xl bg-foreground text-background shadow-sm md:col-start-4 md:row-span-2 md:row-start-1"
          >
            {/* dezenter Karten-Hintergrund */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=70')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay",
              }}
            />
            <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6">
              <div>
                <MapPin className="h-7 w-7 text-background" />
                <h3 className="mt-6 text-2xl font-bold leading-tight">
                  Ihr Bezirk ist
                  <br />
                  nicht dabei?
                </h3>
              </div>
              <span className="mt-6 inline-flex w-fit items-center rounded-full bg-background/15 px-4 py-2 text-sm font-medium text-background ring-1 ring-background/30 transition group-hover:bg-background/25">
                Fragen Sie gerne an!
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
