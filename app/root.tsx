import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Stack, Container } from "rfui";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://rfui.deno.dev/rfui.css" },
  { rel: "stylesheet", href: "/prism.css" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
  },
  {
    rel: "script",
    href: "/prism.js",
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
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default () => {
  return (
    <Stack className="min-h-screen">
      <Navbar route="TODO" />
      <Container size="2xl" className="mb-6 mt-8 grow font-sans">
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
};

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
};
