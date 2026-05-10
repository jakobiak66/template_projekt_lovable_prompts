import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const leistungen = [
  { label: "Kostenlose Beratung", to: "/leistungen/kostenlose-beratung" },
  { label: "Installation Sanitär", to: "/leistungen/installation-sanitaer" },
  { label: "Installation Heizgerät", to: "/leistungen/installation-heizgeraet" },
  { label: "Wärmepumpe", to: "/leistungen/waermepumpe" },
];

const nav = [
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Karriere", to: "/karriere" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-dark text-primary-foreground text-xs">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center">
          <span className="opacity-90">⚡ Notfall-Service · Werktags innerhalb von 24h vor Ort</span>
          <a href="tel:+4930" className="hidden md:inline-flex items-center gap-1 hover:text-primary-glow transition-smooth">
            <Phone className="h-3 w-3" /> 030 / 123 456 78
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/90 backdrop-blur border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-2xl font-extrabold text-primary-dark">
            clara
            <span className="text-primary text-3xl leading-none">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/ueber-uns" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Über uns
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary bg-transparent h-auto p-0">
                    Leistungen
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 p-2">
                      {leistungen.map((l) => (
                        <li key={l.to}>
                          <Link
                            to={l.to}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-smooth"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/kontakt" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Kontakt
            </Link>
            <Link to="/karriere" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Karriere
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <Link to="/kontakt">Jetzt Termin buchen</Link>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-foreground"
              aria-label="Menü"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container flex flex-col py-3">
              <Link to="/ueber-uns" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                Über uns
              </Link>
              <details className="py-2">
                <summary className="text-sm font-medium cursor-pointer flex items-center justify-between">
                  Leistungen <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="pl-3 pt-2 flex flex-col gap-2">
                  {leistungen.map((l) => (
                    <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm text-foreground/80">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </details>
              {nav.slice(1).map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
