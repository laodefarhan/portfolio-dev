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
    default: "Laode F. Fadilah | Full Stack Developer Portfolio",
    template: "%s | Laode F. Fadilah"
  },
  description: "Explore the professional portfolio of Laode Farhan Fadilah, a Junior Full Stack Developer specializing in React, Next.js, and Android development. Discover innovative web and mobile solutions.",
  keywords: [
    "Laode Farhan Fadilah",
    "Full Stack Developer Indonesia",
    "Web Developer Jakarta",
    "Next.js Developer",
    "React.js Expert",
    "Android App Developer",
    "Junior Web Developer Portfolio",
    "Software Engineer Indonesia",
    "Pembuatan Website Jakarta",
    "Jasa Developer Aplikasi",
    "Portofolio Programmer",
    "Deep Learning YOLOv8 Project"
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
    title: "Laode Farhan Fadilah - Full Stack Developer Portfolio",
    description: "Personal portfolio showcasing expertise in web development (React/Next.js) and mobile solutions. High-quality digital experiences built with precision.",
    url: "https://laodefarhanfadilah.vercel.app/",
    siteName: "Laode Farhan Fadilah Portfolio",
    images: [
      {
        url: "/assets/hero-profile-laode-farhan-fadilah.jpg",
        width: 1200,
        height: 630,
        alt: "Laode Farhan Fadilah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laode Farhan Fadilah | Full Stack Developer",
    description: "Showcase of web and mobile development projects by Laode Farhan Fadilah.",
    images: ["/assets/hero-profile-laode-farhan-fadilah.jpg"],
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
