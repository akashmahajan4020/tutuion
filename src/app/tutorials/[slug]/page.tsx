import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock3, PlayCircle, Star, Users } from "lucide-react";

import { TutorialCard } from "@/components/tutorials/tutorial-card";
import { VideoPlayer } from "@/components/media/video-player";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { getTutorialBySlug, siteConfig, tutorials } from "@/data/site";

type TutorialDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export function generateMetadata({
  params,
}: TutorialDetailPageProps): Metadata {
  const tutorial = getTutorialBySlug(params.slug);

  if (!tutorial) {
    return {
      title: "Tutorial Not Found",
    };
  }

  return {
    title: tutorial.title,
    description: tutorial.description,
  };
}

export default function TutorialDetailPage({
  params,
}: TutorialDetailPageProps) {
  const tutorial = getTutorialBySlug(params.slug);

  if (!tutorial) {
    notFound();
  }

  const relatedTutorials = tutorials
    .filter((item) => item.slug !== tutorial.slug && item.category !== tutorial.category)
    .slice(0, 3);

  return (
    <main>
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src={tutorial.image}
            alt={tutorial.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40" />
        </div>

        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              {tutorial.category}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {tutorial.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              {tutorial.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Clock3 className="h-4 w-4" />
                {tutorial.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Users className="h-4 w-4" />
                {tutorial.students}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Star className="h-4 w-4 fill-accent text-accent" />
                {tutorial.rating} rating
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell -mt-10 pb-16 sm:pb-20">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.18fr)_380px]">
          <Reveal>
            <Card className="overflow-hidden p-0">
              <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                    Video Lesson
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-slate">
                    Watch a clean lesson preview
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                    The player is now framed inside a dedicated lesson card so the preview,
                    poster, and playback controls stay aligned on every screen size.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
                  Recorded class preview
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <VideoPlayer url={tutorial.videoUrl} poster={tutorial.image} />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <Card className="p-7 sm:p-8 xl:sticky xl:top-24">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Course Snapshot
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Mentor</p>
                  <p className="font-semibold text-slate">{tutorial.mentor}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Level</p>
                  <p className="font-semibold text-slate">{tutorial.level}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Format</p>
                  <p className="font-semibold text-slate">Recorded + practice support</p>
                </div>
              </div>
              <div className="mt-8 rounded-[26px] bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  Need Help Choosing?
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Call or WhatsApp {siteConfig.phone} for subject guidance, class
                  selection, and admissions support.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/register"
                  className={buttonVariants({ variant: "primary", className: "w-full" })}
                >
                  Enroll Now
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <Card className="p-7 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-slate">
                What students will achieve
              </h2>
              <div className="mt-6 grid gap-4">
                {tutorial.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 rounded-[24px] bg-slate-50 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-sm leading-7 text-slate-600">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-7 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-slate">
                Course modules
              </h2>
              <div className="mt-6 grid gap-4">
                {tutorial.modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex items-center justify-between rounded-[24px] border border-slate-200 p-4"
                  >
                    <div>
                      <p className="text-sm text-slate-400">Module {index + 1}</p>
                      <p className="font-medium text-slate">{module}</p>
                    </div>
                    <PlayCircle className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">More Tutorials</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate">
                Keep exploring the library
              </h2>
            </div>
            <Link href="/tutorials" className={buttonVariants({ variant: "outline" })}>
              Back to Tutorials
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedTutorials.map((relatedTutorial) => (
              <TutorialCard key={relatedTutorial.slug} tutorial={relatedTutorial} compact />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
