import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type Step = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quoteEyebrow?: string;
  quote?: string;
  resultEyebrow?: string;
  resultItems?: string[];
};

type Article = {
  slug: string;
  badge: string;
  date: string;
  readTime: string;
  title: string;
  titleItalic?: string;
  excerpt: string;
  body: string[];
  image: string;
  rechtsgebiet: string;
  thema: string;
  normen: string;
  autorFokus: string;
  ausgangslageEyebrow: string;
  ausgangslageTitle: string;
  ausgangslage: string[];
  stepsEyebrow: string;
  steps: Step[];
  faqEyebrow: string;
  faqs: { q: string; a: string }[];
  ergebnisEyebrow: string;
  ergebnisTitle: string;
  ergebnisItalic: string;
  ergebnisItems: string[];
  ctaText: string;
};

const placeholderTemplate = (overrides: Partial<Article>): Article => ({
  slug: "",
  badge: "ERMITTLUNGSVERFAHREN",
  date: "5. Februar 2026",
  readTime: "6 Min.",
  title: "Beitragstitel",
  titleItalic: "im Detail?",
  excerpt:
    "Wenn eine Vorladung kommt, entscheidet die Reihenfolge: nicht erst reden, sondern zuerst die Aktenlage klären.",
  body: [],
  image:
    "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=1400&q=70",
  rechtsgebiet: "Ermittlungsverfahren",
  thema: "Vorladung als Beschuldigter",
  normen: "§ 163a StPO, § 147 StPO",
  autorFokus:
    "Fokus auf frühe Verfahrenssteuerung, Akteneinsicht und taktische Einlassungsentscheidungen im Ermittlungsverfahren.",
  ausgangslageEyebrow: "AUSGANGSLAGE",
  ausgangslageTitle:
    "Eine Vorladung bei der Polizei wirkt wie ein Pflichttermin – strategisch entscheidet aber zuerst die Aktenlage.",
  ausgangslage: [
    "Eine Vorladung von der Polizei als Beschuldigter erzeugt regelmäßig Druck. Juristisch ist entscheidend, wer lädt und auf welcher Grundlage.",
    "Nicht die schnelle Reaktion, sondern die Reihenfolge ist zentral: Rechte sichern, Aktenlage klären, dann über Einlassung entscheiden.",
  ],
  stepsEyebrow: "WAS JETZT WIRKLICH ZÄHLT",
  steps: [
    {
      eyebrow: "PFLICHT ODER EINLADUNG",
      title: "Polizeiliche Vorladung sauber einordnen",
      paragraphs: [
        "Bei einer rein polizeilichen Vorladung besteht als Beschuldigter regelmäßig keine Pflicht zum Erscheinen. Anders kann es sein, wenn im Auftrag der Staatsanwaltschaft geladen wird (§ 163a StPO).",
        "Auch bei Erscheinenspflicht bleibt das Schweigerecht bestehen. Es gibt keine Pflicht zur inhaltlichen Aussage.",
      ],
    },
    {
      eyebrow: "TYPISCHER FEHLER",
      title: '"Ich erkläre das kurz"',
      paragraphs: [
        "Frühe Aussagen erzeugen oft Widersprüche, neue Ermittlungsansätze und belastende Akteninterpretationen.",
        "Vermeintlich harmlose Details zu Kontakten, Abläufen oder Geräten können den Vorwurf unnötig erweitern.",
      ],
    },
    {
      eyebrow: "STRATEGIE",
      title: "Akteneinsicht vor jeder Einlassung",
      quoteEyebrow: "VERTEIDIGUNGSGSZIEL",
      quote:
        "Nicht reagieren aus Druck, sondern entscheiden auf Basis der tatsächlichen Aktenlage.",
      paragraphs: [
        "Akteneinsicht (§ 147 StPO) ist der Standardweg. Erst wenn Zeugenangaben, Protokolle, Auswertungen und Gutachten bekannt sind, wird über die Form der Einlassung entschieden.",
        "Möglich sind Schweigen, schriftliche Einlassung, Teil-Einlassung oder in Ausnahmefällen ein Termin – aber erst nach Aktenprüfung.",
      ],
      resultEyebrow: "MINI-ERGEBNIS",
      resultItems: [
        "Vorladung prüfen: Rolle, Absender, Auftrag der Staatsanwaltschaft.",
        "Keine Telefonate zur Sache und keine freiwilligen Nachreichungen.",
        "Erst Akte, dann Aussage.",
      ],
    },
  ],
  faqEyebrow: "KURZ FAQ",
  faqs: [
    {
      q: "Kann Nicht-Erscheinen negativ ausgelegt werden?",
      a: "Schweigen darf nicht negativ gewertet werden; faktisch ist Nicht-Erscheinen oft sinnvoll, abhängig von Absender und Auftrag.",
    },
    {
      q: "Muss ich Pass oder Handy mitbringen?",
      a: "Ohne klare rechtliche Grundlage: nein.",
    },
  ],
  ergebnisEyebrow: "✓ ERGEBNIS",
  ergebnisTitle: "Bei Vorladung als Beschuldigter gilt:",
  ergebnisItalic: "Erst Akte, dann Aussage.",
  ergebnisItems: [
    "Die frühe Vernehmung ist selten der beste erste Schritt.",
    "Akteneinsicht steuert, ob und wie eine Einlassung sinnvoll ist.",
    "Je früher Verteidigung eingebunden ist, desto höher die Kontrolle über den Verfahrensverlauf.",
  ],
  ctaText:
    "Schicken Sie die Vorladung (Foto/PDF) – wir sagen kurzfristig, ob Erscheinenspflicht besteht und welche Strategie passt.",
  ...overrides,
});

export const articles: Article[] = [
  placeholderTemplate({
    slug: "hausdurchsuchung-was-tun",
    badge: "ERMITTLUNGSVERFAHREN",
    date: "12. März 2026",
    readTime: "8 min lesen",
    title: "Hausdurchsuchung —",
    titleItalic: "Was tun?",
    excerpt: "Rechte, Verhalten und erste Schritte beim Durchsuchungsbeschluss.",
    thema: "Hausdurchsuchung",
    normen: "§§ 102, 105 StPO",
    ausgangslageTitle:
      "Eine Hausdurchsuchung trifft Mandanten häufig überraschend und unter erheblichem Druck.",
    ausgangslage: [
      "Die ersten Minuten prägen den weiteren Verlauf des Verfahrens. Entscheidend ist, Rechte zu kennen und besonnen zu handeln.",
      "Nicht die spontane Erklärung, sondern die strukturierte Reaktion sichert die Verteidigungsposition für das spätere Verfahren.",
    ],
  }),
  placeholderTemplate({
    slug: "verfahrensrecht-grundlagen",
    badge: "VERFAHRENSRECHT",
    date: "8. März 2026",
    readTime: "7 min lesen",
    title: "Verfahrensrecht —",
    titleItalic: "Grundlagen?",
    excerpt:
      "Verfahrensrechtliche Weichenstellungen und ihre Bedeutung im Strafprozess.",
    thema: "Verfahrensrecht",
    normen: "§§ 151 ff. StPO",
  }),
  placeholderTemplate({
    slug: "hauptverfahren-ablauf",
    badge: "HAUPTVERFAHREN",
    date: "1. März 2026",
    readTime: "7 min lesen",
    title: "Hauptverfahren —",
    titleItalic: "Ablauf?",
    excerpt:
      "Von der Anklageerhebung bis zum Urteil: Was im Hauptverfahren zählt.",
    thema: "Hauptverfahren",
    normen: "§§ 226 ff. StPO",
  }),
  placeholderTemplate({
    slug: "vorfeld-ermittlungen",
    badge: "VORFELD",
    date: "24. Februar 2026",
    readTime: "6 min lesen",
    title: "Vorfeldermittlungen —",
    titleItalic: "was geschieht?",
    excerpt:
      "Frühe Ermittlungsmaßnahmen und ihre Auswirkungen auf den Beschuldigten.",
    thema: "Vorfeldermittlungen",
    normen: "§ 152 StPO",
  }),
  placeholderTemplate({
    slug: "zigarettenstrafrecht",
    badge: "ZIGARETTENSTRAFRECHT",
    date: "17. Februar 2026",
    readTime: "5 min lesen",
    title: "Zigarettenstrafrecht —",
    titleItalic: "im Überblick?",
    excerpt: "Rechtliche Risiken im Umgang mit unversteuerten Tabakwaren.",
    thema: "Zigarettenstrafrecht",
    normen: "§ 370 AO",
  }),
  placeholderTemplate({
    slug: "beweisrecht-im-strafprozess",
    badge: "BEWEISRECHT",
    date: "10. Februar 2026",
    readTime: "7 min lesen",
    title: "Beweisrecht —",
    titleItalic: "Verwertungsverbote?",
    excerpt: "Wann Beweise nicht verwertet werden dürfen — und wie man das nutzt.",
    thema: "Beweisrecht",
    normen: "§ 136a StPO",
  }),
  placeholderTemplate({
    slug: "hausdurchsuchung-rechte",
    badge: "HAUSDURCHSUCHUNG",
    date: "3. Februar 2026",
    readTime: "6 min lesen",
    title: "Hausdurchsuchung —",
    titleItalic: "Ihre Rechte?",
    excerpt:
      "Rechtsgrundlagen, Durchsuchungsbeschluss und richtiges Verhalten.",
    thema: "Hausdurchsuchung",
    normen: "§§ 102, 105 StPO",
  }),
];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Kanzlei Wenzel` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center">{error.message}</div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <p className="font-serif text-3xl">Beitrag nicht gefunden</p>
        <Link to="/blog" className="mt-4 inline-block text-blue-accent">
          ← Zurück zum Blog
        </Link>
      </div>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData() as Article;
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-36 lg:pt-44 pb-20 lg:pb-28">
        <div className="container-x">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-8">
            <Link to="/blog" className="hover:text-navy-foreground transition">
              Blog
            </Link>{" "}
            <span className="opacity-50">/</span> {article.badge}
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-blue-accent border border-blue-accent/40 rounded-full px-3 py-1">
              {article.badge}
            </span>
            <span className="text-xs text-navy-foreground/55">
              {article.date} · {article.readTime}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            {article.title}
            {article.titleItalic && (
              <>
                <br />
                <span className="italic text-blue-accent">
                  {article.titleItalic}
                </span>
              </>
            )}
          </h1>
          <p className="mt-8 text-base lg:text-lg text-navy-foreground/65 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Main */}
          <div className="space-y-10">
            {/* Ausgangslage */}
            <div>
              <p className="eyebrow mb-5">{article.ausgangslageEyebrow}</p>
              <h2 className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
                {article.ausgangslageTitle}
              </h2>
              <div className="mt-6 space-y-4 text-sm text-foreground/75 leading-relaxed">
                {article.ausgangslage.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Steps card */}
            <div className="rounded-2xl bg-cream p-6 lg:p-10">
              <p className="eyebrow mb-8">{article.stepsEyebrow}</p>
              <ol className="space-y-10">
                {article.steps.map((s, i) => (
                  <li
                    key={i}
                    className={`grid grid-cols-[auto_1fr] gap-6 ${
                      i > 0 ? "border-t border-border pt-10" : ""
                    }`}
                  >
                    <span className="font-serif italic text-3xl text-foreground/35 leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-foreground/55 mb-2">
                        {s.eyebrow}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl leading-snug tracking-tight">
                        {s.title}
                      </h3>
                      {s.quote && (
                        <div className="mt-5 border-l-2 border-blue-accent pl-4">
                          {s.quoteEyebrow && (
                            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-foreground/55 mb-2">
                              {s.quoteEyebrow}
                            </p>
                          )}
                          <p className="font-serif italic text-lg leading-snug">
                            {s.quote}
                          </p>
                        </div>
                      )}
                      <div className="mt-4 space-y-3 text-sm text-foreground/75 leading-relaxed">
                        {s.paragraphs.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                      </div>
                      {s.resultItems && (
                        <div className="mt-5 rounded-xl bg-navy text-navy-foreground p-5">
                          {s.resultEyebrow && (
                            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-navy-foreground/55 mb-3">
                              {s.resultEyebrow}
                            </p>
                          )}
                          <ul className="space-y-2 text-sm">
                            {s.resultItems.map((r, k) => (
                              <li
                                key={k}
                                className="flex gap-3 text-navy-foreground/85"
                              >
                                <span className="mt-2 block w-3 h-px bg-navy-foreground/40 flex-shrink-0" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div>
              <p className="eyebrow mb-5">{article.faqEyebrow}</p>
              <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
                {article.faqs.map((f, i) => (
                  <div key={i}>
                    <p className="font-medium text-foreground">{f.q}</p>
                    <p className="mt-1">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ergebnis */}
            <div className="rounded-2xl bg-navy text-navy-foreground p-6 lg:p-10">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/65 mb-5">
                {article.ergebnisEyebrow}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
                {article.ergebnisTitle}{" "}
                <span className="italic text-blue-accent">
                  {article.ergebnisItalic}
                </span>
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-navy-foreground/75">
                {article.ergebnisItems.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 block w-3 h-px bg-navy-foreground/40 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom nav */}
            <div className="flex flex-wrap gap-x-10 gap-y-3 pt-6 text-[0.65rem] tracking-[0.25em] uppercase text-foreground/55">
              <Link to="/blog" className="hover:text-foreground transition">
                ← Alle Beiträge
              </Link>
              <span>· {article.badge}</span>
              <Link
                to="/blog/$slug"
                params={{ slug: next.slug }}
                className="hover:text-foreground transition"
              >
                Nächster Beitrag →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="rounded-2xl bg-cream p-6">
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-5">
                Artikeldetails
              </p>
              <dl className="text-sm space-y-3">
                {[
                  ["Rechtsgebiet", article.rechtsgebiet],
                  ["Thema", article.thema],
                  ["Datum", article.date],
                  ["Lesezeit", article.readTime],
                  ["Normen", article.normen],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] gap-3">
                    <dt className="text-[0.6rem] tracking-[0.2em] uppercase text-foreground/55 pt-1">
                      {k}
                    </dt>
                    <dd className="text-foreground/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-cream p-6">
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-4">
                Autor
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-navy text-navy-foreground grid place-items-center font-serif text-sm">
                  BW
                </div>
                <div>
                  <p className="font-serif text-base">Benjamin C. Wenzel</p>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-foreground/55">
                    Fachanwalt für Strafrecht
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-foreground/70 leading-relaxed">
                {article.autorFokus}
              </p>
            </div>

            <div className="rounded-2xl bg-cream p-6">
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-4">
                Verwandte Beiträge
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[0.55rem] tracking-[0.2em] uppercase text-foreground/55 mb-1">
                    Rechtsgebiet
                  </p>
                  <Link
                    to="/rechtsgebiete/strafrecht-berlin"
                    className="text-blue-accent hover:opacity-80"
                  >
                    Strafrecht Berlin
                  </Link>
                </div>
                {articles
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 2)
                  .map((a) => (
                    <div key={a.slug}>
                      <p className="text-[0.55rem] tracking-[0.2em] uppercase text-foreground/55 mb-1">
                        Beitrag
                      </p>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: a.slug }}
                        className="text-blue-accent hover:opacity-80"
                      >
                        {a.title} {a.titleItalic}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            <div className="rounded-2xl bg-navy text-navy-foreground p-6">
              <p className="font-serif italic text-base leading-snug">
                {article.ctaText}
              </p>
              <a
                href="tel:+4930120593430"
                className="mt-5 inline-flex w-full justify-center items-center gap-2 rounded-full bg-cream text-navy px-5 py-2.5 text-sm hover:bg-white transition"
              >
                030 120 593 430
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
