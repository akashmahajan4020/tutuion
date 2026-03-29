import { cn } from "@/lib/utils";

type AlfaDMarkProps = {
  className?: string;
};

export function AlfaDMark({ className }: AlfaDMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M12 47.5c6.8-8.5 13.1-14.9 20-20.3C38.1 22.4 44.7 18.8 53 15"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 49.5c5.6-3.1 11.8-4.7 18.5-4.7 7.8 0 14.8 2.1 21.1 6.2"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      />
      <path
        d="M30 20.5c4.6 4.7 8.5 10.8 11.7 18.3"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.76"
      />
      <circle cx="15.5" cy="48" r="3.5" fill="currentColor" />
    </svg>
  );
}
