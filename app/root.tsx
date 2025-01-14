import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { Container, Stack } from "rfui";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";

export { ErrorBoundary } from "@/components/error-boundary/error-boundary";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
  },
  {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☆</text></svg>",
  },
];

export const meta = () => [
  { title: "RFUI" },
  { name: "description", content: "A component library for React" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

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
          <Navbar route={location.pathname} />
          <Container size="2xl" className="mb-6 mt-8 grow font-sans">
            {children}
          </Container>
          <Footer />
        </Stack>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default () => {
  return <Outlet />;
};
