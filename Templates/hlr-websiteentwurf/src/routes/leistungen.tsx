import { createFileRoute, Outlet, useLocation, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/leistungen")({
  component: LeistungenLayout,
});

function LeistungenLayout() {
  const location = useLocation();

  if (location.pathname.replace(/\/$/, "") === "/leistungen") {
    throw notFound();
  }

  return <Outlet />;
}
