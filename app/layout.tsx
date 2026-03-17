import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Advisory",
  description: "International Strategy Consultancy — Madrid · London · Washington, D.C.",
  openGraph: {
    title: "Meridian Advisory",
    description: "International Strategy Consultancy — Madrid · London · Washington, D.C.",
    siteName: "Meridian Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
