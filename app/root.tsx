import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Stack, Container } from "rfui";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";

export { ErrorBoundary } from "@/components/error-boundary/error-boundary";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://rfui.deno.dev/rfui.css" },
  { rel: "stylesheet", href: "/prism.css" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
  },
];

export const meta = () => [
  { title: "RFUI" },
  { name: "description", content: "A component library for React" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Stack className="min-h-screen">
          <Navbar route="TODO" />
          <Container size="2xl" className="mb-6 mt-8 grow font-sans">
            {children}
          </Container>
          <Footer />
        </Stack>
        <ScrollRestoration />
        <Scripts />
        <script src="/prism.js"></script>
      </body>
    </html>
  );
};

export default () => {
  return <Outlet />;
};
