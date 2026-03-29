import Link from "next/link";
import {
  BriefcaseBusiness,
  BookOpenText,
  Camera,
  Mail,
  Phone,
  PlayCircle,
} from "lucide-react";

import { siteConfig } from "@/data/site";

import { Logo } from "./logo";

const socialIcons = {
  Instagram: Camera,
  LinkedIn: BriefcaseBusiness,
  YouTube: PlayCircle,
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-5">
            <Logo dark />
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Alfa D Tutoring supports students with Maths, Science, English,
              Gujarati medium guidance, Hindi tutorial help, and spoken English
              practice.
            </p>
            <div className="grid gap-3 text-sm text-slate-300">
              {siteConfig.focusAreas.map((item) => (
                <div key={item} className="flex gap-3">
                  <BookOpenText className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="text-sm text-slate-300 hover:text-white">
                Login
              </Link>
              <Link href="/admin/dashboard" className="text-sm text-slate-300 hover:text-white">
                Admin Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Contact Info</h3>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <BookOpenText className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.availability}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <a href={`tel:${siteConfig.phone}`}>Call or WhatsApp: {siteConfig.phone}</a>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {siteConfig.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 hover:border-accent hover:text-accent"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
