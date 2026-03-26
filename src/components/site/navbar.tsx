"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants, Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-slate-600 hover:text-primary",
                    isActive && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {session?.user ? (
              <>
                {session.user.role === "admin" ? (
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Dashboard
                  </Link>
                ) : null}
                <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })}>
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
                Login
              </Link>
            )}
            <Link href="/register" className={buttonVariants({ variant: "primary" })}>
              Enroll Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="grid gap-3 border-t border-slate-200/70 py-4 lg:hidden">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-muted hover:text-primary",
                  pathname === link.href && "bg-muted text-primary",
                )}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            {session?.user ? (
              <>
                {session.user.role === "admin" ? (
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({ variant: "secondary" })}
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                ) : null}
                <Button
                  variant="ghost"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link
                href="/login"
                className={buttonVariants({ variant: "secondary" })}
                onClick={closeMenu}
              >
                Login
              </Link>
            )}
            <Link
              href="/register"
              className={buttonVariants({ variant: "primary" })}
              onClick={closeMenu}
            >
              Enroll Now
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
