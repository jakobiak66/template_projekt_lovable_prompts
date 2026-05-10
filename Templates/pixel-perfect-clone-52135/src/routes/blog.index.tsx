import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — PutzKraft24 Gebäudereinigung Berlin" },
      { name: "description", content: "Aktuelle Beiträge rund um Büroreinigung, Kosten, Frequenz und Tipps für Berliner Unternehmen." },
      { property: "og:title", content: "Blog — PutzKraft24" },
      { property: "og:description", content: "Aktuelle Beiträge rund um Büroreinigung in Berlin." },
    ],
  }),
  component: BlogPage,
});

type Post = {
  title: string;
  href: string;
  internal?: boolean;
  image: string;
  alt: string;
};

const posts: Post[] = [
  {
    title: "Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide für Berliner Unternehmen 2026",
    href: "/blog/buero-reinigungs-frequenz",
    internal: true,
    image: "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69ea02da8b009bc03342ffe3_bueroreinigung-frequenz-hero.svg",
    alt: "Wochenplan-Visualisierung: Sieben Tage als farbige Punkte, zwei Reinigungstage in Orange hervorgehoben",
  },
  {
    title: "Was kostet Büroreinigung in Berlin? Stundensatz & Festpreis",
    href: "/blog/kosten-bueroreinigung-berlin",
    internal: true,
    image: "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0b06_69e9f8dd2ab0439e13d2a423_bueroreinigung-kosten-hero.jpeg",
    alt: "Hände halten ein Notizbuch mit Kosten-Notizen vor einem hellen Berliner Büro mit sage-grünen Pflanzen",
  },
  {
    title: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress",
    href: "/blog/reinigungsfirma-wechseln",
    internal: true,
    image: "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0af9_69e9f8dda1809670a847ee79_reinigungsfirma-wechseln-hero.jpeg",
    alt: "Drei Personen besprechen einen Reinigungsvertrag in einem hellen Berliner Büro mit warmem Tageslicht",
  },
  {
    title: "Reinigungsmythen entlarvt",
    href: "/blog/reinigungsmythen-entlarvt",
    internal: true,
    image: "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0afd_69e9f8ddc48bf5627426579e_reinigungsmythen-hero.jpeg",
    alt: "Saubere Glasfläche und professionelle Reinigungsmittel auf einer Marmorablage in einem Berliner Büro",
  },
  {
    title: "Reinigungsfirma für Unternehmen Berlin: Auswahl, Preise & Verträge",
    href: "/blog/reinigungsfirma-unternehmen-berlin",
    internal: true,
    image: "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0b01_69e9f8dd9599b080b3028c11_reinigungsdienstleistungen-hero.jpeg",
    alt: "Heller Empfangsraum eines Berliner Altbau-Büros mit sage-grünen Pflanzen und warmem Holzparkett",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Blog
          </h1>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const cardClass =
                "group block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg";
              const inner = (
                <>
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-orange">
                      {post.title}
                    </h2>
                  </div>
                </>
              );
              return post.internal ? (
                <Link key={post.href} to={post.href} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-secondary/40">
          <img
            src="https://cdn.prod.website-files.com/66e8f50b2be1349c79d046e5/66e921d24c4c6b402ec9e983_Berlin.avif"
            alt="Skyline von Berlin mit Brandenburger Tor und Fernsehturm"
            className="mx-auto block w-full max-w-7xl"
            loading="lazy"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
