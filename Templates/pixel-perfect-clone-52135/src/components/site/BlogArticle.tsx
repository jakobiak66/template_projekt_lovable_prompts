import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import berlinSkyline from "@/assets/berlin-skyline.png";

export type ArticleBullet = { k: string; v: string };
export type ArticleSection = {
  heading: string;
  intro?: string;
  bullets?: ArticleBullet[];
  subsections?: { heading: string; text: string }[];
};
export type ArticleFAQ = { q: string; a: string };
export type ArticleRelated = { to: string; title: string; image: string };

export type BlogArticleProps = {
  breadcrumb: string;
  titleLines: string[];
  heroImage: string;
  heroAlt: string;
  summary: string;
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  ctaText: string;
  related: ArticleRelated[];
  heroFullViewport?: boolean;
};

export function BlogArticle(props: BlogArticleProps) {
  const {
    breadcrumb,
    titleLines,
    heroImage,
    heroAlt,
    summary,
    sections,
    faqs,
    ctaText,
    related,
    heroFullViewport,
  } = props;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className={heroFullViewport ? "flex min-h-[calc(100vh-80px)] items-center bg-background" : "bg-background"}>
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
            <div>
              <nav className="mb-4 text-xs font-medium" style={{ color: "#3d5450" }}>
                <Link to="/" className="hover:underline">
                  Home
                </Link>{" "}
                ›{" "}
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>{" "}
                › <span>{breadcrumb}</span>
              </nav>
              <h1
                className="text-4xl font-bold leading-tight md:text-[56px] md:leading-[1.05]"
               
              >
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt={heroAlt}
                className="h-[340px] w-full object-cover md:h-[460px]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed md:text-[15px]"
              style={{ backgroundColor: "#dfeae6", color: "#1a2e2b" }}
            >
              {summary}
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        {sections.map((s) => (
          <section key={s.heading} className="bg-background">
            <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
              <h2
                className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]"
               
              >
                {s.heading}
              </h2>
              {s.intro && (
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
                  {s.intro}
                </p>
              )}
              {s.bullets && (
                <ul className="mt-5 space-y-3 text-[15px]">
                  {s.bullets.map((b) => (
                    <li key={b.k} className="flex gap-2">
                      <span style={{ color: "#e8a23a" }}>•</span>
                      <span>
                        <strong>{b.k}</strong>
                        {b.v}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {s.subsections?.map((sub) => (
                <div key={sub.heading}>
                  <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
                    {sub.heading}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
                    {sub.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="bg-background">
            <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
              <h2
                className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]"
               
              >
                Häufige Fragen
              </h2>
              {faqs.map((f) => (
                <div key={f.q} className="mt-5">
                  <h3 className="text-base font-bold text-[#0d3b2e]">
                    {f.q}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-16 md:px-6">
            <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#dfeae6" }}>
              <p className="text-[15px] leading-relaxed">
                {ctaText}
              </p>
              <Button
                asChild
                className="mt-5 h-12 rounded-full bg-orange px-6 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Kostenloses Angebot anfragen
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-sm" style={{ color: "#3d5450" }}>
                Oder rufen Sie uns direkt an:{" "}
                <a
                  href="tel:+493055634067"
                  className="font-semibold underline"
                 
                >
                  <Phone className="mr-1 inline h-3.5 w-3.5" />
                  +49 30 55634067
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#ecf3f3" }}>
          <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:px-6">
            <h2
              className="text-center text-3xl font-bold md:text-4xl text-[#0d3b2e]"
             
            >
              Ähnliche Blogartikel
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.title}
                  to={r.to}
                  className="group relative h-60 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <h3 className="absolute inset-x-5 bottom-4 text-sm font-bold leading-snug text-white text-[#0d3b2e]">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <img
            src={berlinSkyline}
            alt="Berlin Skyline"
            className="block w-full select-none align-bottom"
            loading="lazy"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
