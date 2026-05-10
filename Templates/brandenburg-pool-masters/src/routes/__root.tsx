import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-water text-white px-5 py-2.5 text-sm font-medium shadow-glow"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AquaMeister Brandenburg — Schwimmbad- & Poolbau seit 1965" },
      {
        name: "description",
        content:
          "Maßgeschneiderter Pool- und Schwimmbadbau in Brandenburg. Familienbetrieb seit 1965, fünfköpfiges Meister-Team. Beratung, Planung, Bau und Service aus einer Hand.",
      },
      { name: "author", content: "AquaMeister Brandenburg" },
      { property: "og:title", content: "AquaMeister Brandenburg — Schwimmbad- & Poolbau seit 1965" },
      {
        property: "og:description",
        content: "Familienbetrieb für hochwertigen Pool- und Schwimmbadbau in Brandenburg.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AquaMeister Brandenburg — Schwimmbad- & Poolbau seit 1965" },
      { name: "description", content: "Brandenburg Pool Masters Volume 2 is a website for a swimming pool construction company." },
      { property: "og:description", content: "Brandenburg Pool Masters Volume 2 is a website for a swimming pool construction company." },
      { name: "twitter:description", content: "Brandenburg Pool Masters Volume 2 is a website for a swimming pool construction company." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53a53031-c79e-4e2b-82b1-503dc51f9305/id-preview-31e85032--950e339b-19b1-4354-a4c7-944ed3293579.lovable.app-1777526195093.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53a53031-c79e-4e2b-82b1-503dc51f9305/id-preview-31e85032--950e339b-19b1-4354-a4c7-944ed3293579.lovable.app-1777526195093.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
