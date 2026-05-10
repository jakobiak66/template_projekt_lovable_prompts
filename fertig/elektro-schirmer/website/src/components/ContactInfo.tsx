import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Props {
  /** Optional brand-colored background variant */
  variant?: "default" | "brand";
}

const items = [
  { Icon: Phone, label: "Telefon", value: "030 - 852 12 69", href: "tel:+4930852l269" },
  { Icon: Mail, label: "E-Mail", value: "elektroschirmerberlin@gmail.com", href: "mailto:elektroschirmerberlin@gmail.com" },
  { Icon: MapPin, label: "Anschrift", value: "Bundesallee 79, 12161 Berlin" },
  { Icon: Clock, label: "Bürozeiten", value: "Mo.–Fr. 08–20 Uhr · Sa./So. Notdienst" },
];

const ContactInfo = ({ variant = "default" }: Props) => {
  const isBrand = variant === "brand";
  return (
    <section className={`py-20 px-6 ${isBrand ? "bg-brand text-brand-foreground" : ""}`}>
      <h2 className={`text-3xl md:text-5xl font-light text-center ${isBrand ? "text-brand-foreground" : ""}`}>
        {isBrand ? (
          <>
            <span className="opacity-80">So </span>
            <span>erreichen Sie uns</span>
          </>
        ) : (
          <SectionTitle primary="So" secondary="erreichen Sie uns" />
        )}
      </h2>
      <p className={`mt-4 text-center max-w-2xl mx-auto ${isBrand ? "text-brand-foreground/90" : "text-brand-dark/70"}`}>
        Sie haben Interesse, eine Frage oder wünschen einen Termin? Rufen Sie uns direkt an, schreiben Sie uns eine E-Mail oder nutzen Sie unser Kontaktformular.
      </p>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {items.map(({ Icon, label, value, href }) => (
          <div key={label} className="text-center">
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${isBrand ? "bg-white/15" : "bg-brand"}`}>
              <Icon size={36} className={isBrand ? "text-brand-foreground" : "text-brand-foreground"} strokeWidth={1.5} />
            </div>
            <p className={`mt-5 text-sm uppercase tracking-wider ${isBrand ? "text-brand-foreground/80" : "text-brand-dark/60"}`}>
              {label}
            </p>
            {href ? (
              <a href={href} className={`mt-1 block font-medium hover:underline ${isBrand ? "text-brand-foreground" : "text-brand"}`}>
                {value}
              </a>
            ) : (
              <p className={`mt-1 font-medium ${isBrand ? "text-brand-foreground" : "text-brand-dark"}`}>{value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
