import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { AuthSessionProvider } from "@/components/providers/auth-session-provider";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tution-tutorial.vercel.app"),
  title: {
    default: "Alfa D Tutoring | Home and Online Tuition",
    template: "%s | Alfa D Tutoring",
  },
  description:
    "Alfa D Tutoring offers home and online tuition with recorded lessons, subject support, and simple admissions guidance.",
  keywords: [
    "tuition classes",
    "recorded lessons",
    "online learning",
    "exam preparation",
    "next.js education website",
  ],
  openGraph: {
    title: "Alfa D Tutoring | Home and Online Tuition",
    description:
      "Maths, Science, English, Gujarati medium, Hindi tutorial, and spoken English support for Grade 1 to 10 learners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa D Tutoring | Home and Online Tuition",
    description:
      "Maths, Science, English, Gujarati medium, Hindi tutorial, and spoken English support for Grade 1 to 10 learners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <AuthSessionProvider>
          <div className="relative overflow-x-clip bg-white">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-hero-glow" />
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
