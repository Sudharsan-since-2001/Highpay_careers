import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://highpay-careers.vercel.app'),
  title: "Highpay_careers | The Best Career for Anyone is in AI",
  description: "Join the next industrial revolution. We provide the roadmap, tools, and community to transition your career into the machine learning era.",
  openGraph: {
    title: "Highpay_careers | AI Career Transition",
    description: "Architect your future in AI. Don't just witness the future—architect it.",
    url: "https://highpay-careers.vercel.app", // Placeholder to show it's Vercel-ready
    siteName: "Highpay_careers",
    images: [
      {
        url: "/images/hero-ai.png",
        width: 1200,
        height: 630,
        alt: "Highpay_careers AI Roadmap",
      },
    ],
    locale: "en_US",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
