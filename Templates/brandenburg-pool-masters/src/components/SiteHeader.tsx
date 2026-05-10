import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";

const nav = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-pro flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-10 rounded-xl bg-gradient-water flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
            <Waves className="size-5 text-white" strokeWidth={2.5} />
          </div>
          <div className={`leading-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
            <div className="font-display font-semibold text-lg tracking-tight">
              AquaMeister
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/90"}`}>
              Brandenburg · seit 1965
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                  : "text-white/90 hover:text-white hover:bg-white/15 drop-shadow"
              }`}
              activeProps={{ className: "px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-water text-white px-5 py-2.5 text-sm font-medium shadow-glow hover:scale-105 transition-transform"
        >
          Kostenlos beraten
        </Link>

        <button
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-pro py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium hover:bg-muted"
                activeProps={{ className: "px-4 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-gradient-water text-white px-5 py-3 font-medium"
            >
              Kostenlos beraten
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
