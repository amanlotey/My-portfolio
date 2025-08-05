import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amandeep Singh | Full-Stack Developer",
  description:
    "Portfolio of Amandeep Singh – a React & React Native developer building web and mobile apps.",
  keywords: [
    "Amandeep Singh",
    "React Developer",
    "React Native",
    "Full-Stack Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Amandeep Singh", url: "https://amandeep-portfolio-gamma.vercel.app/" }],
  openGraph: {
    title: "Amandeep Singh | Full-Stack Developer",
    description:
      "Web & Mobile Developer – React, React Native, Node.js, MongoDB.",
    url: "https://amandeep-portfolio-gamma.vercel.app/",
    siteName: "Amandeep Portfolio",
    images: [
      {
        url: "/images/og-banner.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Amandeep Singh Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Optional Apple icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Optional meta tags if needed */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-background text-foreground`}
      >
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
