import logo from "@/assets/elektro-schirmer-logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-brand-dark pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      <Link to="/">
        <img src={logo} alt="Elektro-Schirmer UG" className="h-20 w-auto rounded" />
      </Link>

      <div className="mt-6 text-sm text-white/80 space-y-1">
        <p>Bundesallee 79 · 12161 Berlin</p>
        <p>Tel: <a href="tel:+4930852l269" className="hover:text-brand transition-colors">030 - 852 12 69</a></p>
        <p><a href="mailto:elektroschirmerberlin@gmail.com" className="hover:text-brand transition-colors">elektroschirmerberlin@gmail.com</a></p>
      </div>

      <div className="mt-8 flex justify-center gap-6 text-sm text-white/60">
        <Link to="/impressum" className="hover:text-brand transition-colors">Impressum</Link>
        <a href="#" className="hover:text-brand transition-colors">Datenschutz</a>
      </div>
      <p className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} Elektro-Schirmer UG (haftungsbeschränkt)</p>
    </div>
  </footer>
);

export default Footer;
