import { Link } from "@tanstack/react-router";
import { Waves, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-pro py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-xl bg-gradient-water flex items-center justify-center">
              <Waves className="size-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-semibold text-lg">AquaMeister</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                Brandenburg · seit 1965
              </div>
            </div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Drei Generationen Poolbau-Handwerk aus Brandenburg.
            Maßgeschneiderte Schwimmbäder, gebaut für ein Leben lang.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100">Start</Link></li>
            <li><Link to="/leistungen" className="hover:opacity-100">Leistungen</Link></li>
            <li><Link to="/projekte" className="hover:opacity-100">Projekte</Link></li>
            <li><Link to="/ueber-uns" className="hover:opacity-100">Über uns</Link></li>
            <li><Link to="/kontakt" className="hover:opacity-100">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>Seestraße 12<br />14467 Potsdam, Brandenburg</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <a href="tel:+4933123456789">+49 331 234 567 89</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <a href="mailto:hallo@aquameister-brandenburg.de">hallo@aquameister-brandenburg.de</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Öffnungszeiten</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>Mo – Fr: 8:00 – 17:00</li>
            <li>Sa: nach Vereinbarung</li>
            <li>So: geschlossen</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <p>© {new Date().getFullYear()} AquaMeister Brandenburg. Alle Rechte vorbehalten.</p>
          <p>Familienbetrieb seit 1965 · Meisterbetrieb</p>
        </div>
      </div>
    </footer>
  );
}
