import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TutorialCatalogue } from "@/components/tutorials/tutorial-catalogue";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { tutorialCategories, tutorials } from "@/data/site";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Browse premium tuition tutorials, recorded classes, and subject-specific learning tracks.",
};

export default function TutorialsPage() {
  const featuredTutorial = tutorials[0];

  return (
    <main className="section-shell py-16 sm:py-20">
      <Reveal>
        <div className="grid gap-8 overflow-hidden rounded-[34px] bg-muted p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:p-10">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Tutorial Library"
              title="Browse high-quality recorded lessons by outcome"
              description="The listing layout follows a premium real-estate rhythm: strong feature card first, then a clean searchable grid below."
            />
            <Card className="max-w-lg p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Featured Course
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate">
                {featuredTutorial.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {featuredTutorial.description}
              </p>
              <div className="mt-6">
                <Link
                  href={`/tutorials/${featuredTutorial.slug}`}
                  className={buttonVariants({ variant: "primary" })}
                >
                  View Tutorial
                </Link>
              </div>
            </Card>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[30px]">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Students watching recorded lessons"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <section className="py-16">
        <TutorialCatalogue tutorials={tutorials} categories={tutorialCategories} />
      </section>
    </main>
  );
}
