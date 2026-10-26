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

// Metadata SEO-Optimized
export const metadata: Metadata = {
  title: {
    default: "Laode F. Fadilah | Software Engineer & AI Engineer",
    template: "%s | Laode F. Fadilah"
  },
  description: "Portofolio Laode Farhan Fadilah, Software Engineer dan AI Engineer yang membangun aplikasi web modern serta solusi berbasis machine learning dan kecerdasan buatan.",
  keywords: [
    "Laode Farhan Fadilah",
    "Software Engineer Indonesia",
    "AI Engineer Indonesia",
    "Artificial Intelligence Engineer",
    "Machine Learning Engineer Indonesia",
    "Software Engineer Portfolio",
    "AI Engineer Portfolio",
    "React.js Developer",
    "Next.js Developer Indonesia",
    "TypeScript Developer",
    "Laravel Developer",
    "Machine Learning Project",
    "Solusi Kecerdasan Buatan",
    "Pengembangan Aplikasi Web",
    "Portofolio Laode Farhan Fadilah"
  ],
  authors: [{ name: "Laode Farhan Fadilah", url: "https://laodefarhanfadilah.vercel.app/" }],
  creator: "Laode Farhan Fadilah",
  metadataBase: new URL("https://laodefarhanfadilah.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: 'id_ID',
    title: "Laode Farhan Fadilah | Software Engineer & AI Engineer",
    description: "Portofolio Software Engineer dan AI Engineer yang berfokus pada aplikasi web modern, machine learning, dan solusi berbasis kecerdasan buatan.",
    url: "https://laodefarhanfadilah.vercel.app/",
    siteName: "Portofolio Laode Farhan Fadilah",
    images: [
      {
        url: "/assets/hero-profile-laode-farhan-fadilah.jpg",
        width: 1200,
        height: 630,
        alt: "Portofolio Laode Farhan Fadilah - Software Engineer dan AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laode Farhan Fadilah | Software Engineer & AI Engineer",
    description: "Proyek pengembangan perangkat lunak, aplikasi web, dan solusi AI oleh Laode Farhan Fadilah.",
    images: ["/assets/hero-profile-laode-farhan-fadilah.jpg"],
  },
  verification: {
    google: "fgpVG3_bGurjC-G9NpzyZDPGfdVSRvv0tANxUvYml9M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
