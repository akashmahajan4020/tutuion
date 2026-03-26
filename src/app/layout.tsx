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
    default: "Academic Edge | Premium Tuition Classes",
    template: "%s | Academic Edge",
  },
  description:
    "Modern tuition classes platform with expert mentors, recorded lessons, exam practice, and role-based student/admin access.",
  keywords: [
    "tuition classes",
    "recorded lessons",
    "online learning",
    "exam preparation",
    "next.js education website",
  ],
  openGraph: {
    title: "Academic Edge | Premium Tuition Classes",
    description:
      "Expert tuition classes with recorded video lessons, structured practice, and measurable student outcomes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Edge | Premium Tuition Classes",
    description:
      "Expert tuition classes with recorded video lessons, structured practice, and measurable student outcomes.",
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
