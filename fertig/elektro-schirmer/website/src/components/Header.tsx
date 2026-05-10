import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/elektro-schirmer-logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const leistungen = [
  { label: "Alle Leistungen", to: "/leistungen" },
  { label: "Elektroinstallation", to: "/leistungen/elektroinstallation" },
  { label: "Sicherheitsanlagen", to: "/leistungen/sicherheitsanlagen" },
  { label: "Hausgeräte", to: "/leistungen/hausgeraete" },
  { label: "E-Auto Laden", to: "/leistungen/laden" },
];

const Header = () => {
  const { pathname } = useLocation();
  const isLeistungen = pathname.startsWith("/leistungen");

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 lg:px-12 py-5">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark">
          <Link
            to="/"
            className={pathname === "/" ? "border-b-2 border-brand-dark/70 pb-0.5" : "hover:text-brand transition-colors"}
          >
            Startseite
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link
                to="/leistungen"
                className={`flex items-center gap-1 outline-none ${isLeistungen ? "border-b-2 border-brand-dark/70 pb-0.5" : "hover:text-brand transition-colors"}`}
              >
                Leistungen <ChevronDown size={14} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white">
              {leistungen.map((l) => (
                <DropdownMenuItem key={l.to} asChild>
                  <Link to={l.to} className="cursor-pointer">{l.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/kontakt"
            className={pathname === "/kontakt" ? "border-b-2 border-brand-dark/70 pb-0.5" : "hover:text-brand transition-colors"}
          >
            Kontakt
          </Link>
        </nav>
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="Elektro-Schirmer UG" className="h-16 md:h-20 w-auto" />
        </Link>
        <Button asChild className="bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm font-medium px-5">
          <Link to="/kontakt">Jetzt anfragen</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
