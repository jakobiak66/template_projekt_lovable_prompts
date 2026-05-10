import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+4930000000"
        aria-label="Anrufen"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/4930000000"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
