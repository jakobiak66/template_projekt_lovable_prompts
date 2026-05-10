import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Youtube, Instagram, Linkedin } from "lucide-react";

const youtubeUrl =
  "https://www.youtube.com/watch?v=AJWpg97o1fU&source_ve_path=OTY3MTQ&embeds_widget_referrer=https%3A%2F%2Fwww.putzkraft-24.de%2F&embeds_referring_euri=https%3A%2F%2Fcdn.embedly.com%2F&embeds_referring_origin=https%3A%2F%2Fcdn.embedly.com";
const instagramUrl = "https://www.instagram.com/putzkraft24/";
const linkedinUrl = "https://www.linkedin.com/in/julian-mutzhas-6145aa127/";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 48" className="h-9 w-7" fill="none" aria-hidden>
        <path
          d="M20 4 C8 12, 4 24, 10 36 C14 30, 20 26, 28 24 C22 28, 16 34, 14 42 C22 44, 32 38, 34 26 C36 16, 30 8, 20 4 Z"
          fill="var(--foreground)"
        />
        <circle cx="28" cy="14" r="4" fill="var(--orange)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-foreground">
          PutzKraft<span className="text-orange">24</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-foreground/70">
          Gebäudereinigung
        </span>
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-3 md:px-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground">Über uns</h4>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-wide text-foreground">KONTAKT</h4>
          <ul className="mt-3 space-y-2 text-xs text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/15">
                <MapPin className="h-3 w-3" />
              </span>
              Kantstrasse 141 / 10623 - Berlin
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/15">
                <Mail className="h-3 w-3" />
              </span>
              <a href="mailto:info@putzkraft-24.de" className="hover:underline">
                info@putzkraft-24.de
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/15">
                <Phone className="h-3 w-3" />
              </span>
              <a href="tel:+493055634067" className="hover:underline">
                +49 30 55634067
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <Logo />
          <div className="mt-4 flex items-center gap-3">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#FF0000] transition hover:scale-110"
            >
              <Youtube className="h-5 w-5" fill="currentColor" stroke="white" strokeWidth={1.5} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:scale-110"
            >
              <Instagram
                className="h-5 w-5"
                style={{
                  stroke: "url(#ig-gradient)",
                }}
              />
              <svg width="0" height="0" className="absolute">
                <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="25%" stopColor="#fa7e1e" />
                  <stop offset="50%" stopColor="#d62976" />
                  <stop offset="75%" stopColor="#962fbf" />
                  <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
              </svg>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0a66c2] transition hover:scale-110"
            >
              <Linkedin className="h-5 w-5" fill="currentColor" stroke="white" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 text-xs text-foreground/60 md:flex-row md:items-center md:px-6">
          <span>©Urheberrecht PutzKraft24 GmbH - {new Date().getFullYear()}</span>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
