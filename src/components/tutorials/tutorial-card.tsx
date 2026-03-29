import Image from "next/image";
import Link from "next/link";
import { Clock3, Star } from "lucide-react";

import { tutorials } from "@/data/site";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tutorial = (typeof tutorials)[number];

type TutorialCardProps = {
  tutorial: Tutorial;
  compact?: boolean;
};

export function TutorialCard({ tutorial, compact = false }: TutorialCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className={cn("relative overflow-hidden", compact ? "h-52" : "h-60")}>
        <Image
          src={tutorial.image}
          alt={tutorial.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            {tutorial.category}
          </span>
          <span className="rounded-full bg-slate-950/75 px-3 py-1 text-xs font-medium text-white">
            {tutorial.level}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-accent" />
              {tutorial.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {tutorial.rating}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-slate">
            {tutorial.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-7 text-slate-600">
            {tutorial.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate">{tutorial.mentor}</p>
            <p className="text-sm text-slate-500">{tutorial.students}</p>
          </div>
          <Link
            href={`/tutorials/${tutorial.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Watch Now
          </Link>
        </div>
      </div>
    </Card>
  );
}
