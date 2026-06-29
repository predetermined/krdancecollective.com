import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "King Rose Dance Collective | Berlin's BIPOC/QUEER/FLINTA dance troupe",
  description:
    "King Rose Dance Collective is a Berlin-based dance movement blending ballet, contemporary styles, and radical representation. Founded by Nicholas Isaiah King Rose, KRDC is about empowerment, celebrating diverse voices, and redefining dance.",
  keywords:
    "dance, contemporary ballet, Berlin, collective, radical representation, Nicholas King Rose, dance community",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "King Rose Dance Collective",
    description:
      "Berlin's Movement for Radical Representation. Blending ballet, contemporary styles, and everything in between.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
