import Link from "next/link";

import { cn } from "@/lib/utils";

import { AlfaDMark } from "./alfa-d-mark";

type LogoProps = {
  className?: string;
  dark?: boolean;
};

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg",
          dark
            ? "bg-white text-primary shadow-white/10"
            : "bg-primary text-white shadow-primary/20",
        )}
      >
        <AlfaDMark className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-lg font-semibold",
            dark ? "text-white" : "text-slate",
          )}
        >
          Alfa D
        </span>
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-[0.28em]",
            dark ? "text-slate-400" : "text-slate-400",
          )}
        >
          Tutoring
        </span>
      </span>
    </Link>
  );
}
