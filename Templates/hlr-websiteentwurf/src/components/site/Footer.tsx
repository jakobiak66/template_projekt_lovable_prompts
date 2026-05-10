import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import hlrLogo from "@/assets/hlr-logo.png";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground pt-10 pb-5">
      <div className="container-page">
        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-3">
            <img
              src={hlrLogo}
              alt="H-L-R Heizung und Sanitär GmbH Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
            <p className="mt-3 text-sm text-white/85 leading-relaxed">
              Ihr Meisterbetrieb für Heizung, Sanitär & Bad in Erkner.
            </p>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Leistungen
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              <li>
                <Link to="/leistungen/bad-und-sanitaerinstallation" className="hover:text-white">
                  Bad- & Sanitärinstallation
                </Link>
              </li>
              <li>
                <Link to="/leistungen/heizungstechnik" className="hover:text-white">
                  Heizungstechnik
                </Link>
              </li>
              <li>
                <Link to="/leistungen/solartechnik" className="hover:text-white">
                  Solartechnik
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wohnraumlueftung" className="hover:text-white">
                  Wohnraumlüftung
                </Link>
              </li>
              <li>
                <Link to="/leistungen/wasseraufbereitung" className="hover:text-white">
                  Wasseraufbereitung
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation + Rechtliches */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white">Über uns</Link></li>
              <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
            </ul>
          </div>

          {/* Kontakt — kompakt mit Icons */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold mb-3 uppercase tracking-wider">
              Kontakt
            </div>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Rudolf-Breitscheid-Str. 10–11, 15537 Erkner</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>
                  <a href="tel:+4933628910" className="hover:text-white">03362 503140</a>
                  <span className="text-white/70"> · Fax 03362 504227</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:hlr-gmbh@ewetel.net" className="hover:text-white break-all">
                  hlr-gmbh@ewetel.net
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Mo – Fr: 07:00 – 17:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} H-L-R Heizung und Sanitär GmbH. Alle Rechte vorbehalten.
          </div>
          <div>Meisterbetrieb · Erkner</div>
        </div>
      </div>
    </footer>
  );
}
