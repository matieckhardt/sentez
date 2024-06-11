import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Sentez",
    viewport: "width=device-width,initial-scale=1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          backgroundImage: "url('/bg.jpg')",
          height: "99vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
