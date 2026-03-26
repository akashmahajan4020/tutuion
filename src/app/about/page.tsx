import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { heroStats, whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Academic Edge, our teaching model, and why students trust our tuition platform.",
};

export default function AboutPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="About Academic Edge"
            title="A modern tuition platform built for serious outcomes"
            description="We adapted a premium property-style layout into an education brand that feels trustworthy, spacious, and conversion-focused. The result is clean, professional, and practical."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <Card key={stat.label} className="p-6">
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </Card>
            ))}
          </div>
          <p className="body-copy">
            Academic Edge combines live mentorship, premium recorded lessons, and
            exam-driven practice. Every page, section, and call-to-action is designed
            to move prospective students toward enrolment without making the interface
            feel crowded or over-designed.
          </p>
          <Link href="/register" className={buttonVariants({ variant: "primary" })}>
            Enroll Now
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[34px]">
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80"
              alt="Students in a bright classroom"
              width={960}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <section className="py-20">
        <SectionHeading
          eyebrow="Why Families Trust Us"
          title="Clear teaching, structured accountability, and better revision access"
          description="The platform is intentionally simple: premium visuals up front, then enough proof and clarity for students and parents to make a confident decision."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <Card className="h-full p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-slate">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
