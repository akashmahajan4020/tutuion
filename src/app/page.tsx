import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle, Quote } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { ContactForm } from "@/components/forms/contact-form";
import { TutorialCard } from "@/components/tutorials/tutorial-card";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  featuredTutorials,
  heroStats,
  homeBlogPosts,
  services,
<<<<<<< HEAD
  siteConfig,
=======
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
  testimonials,
  whyChooseUs,
} from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Students learning together"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/85 to-primary/45" />
        </div>

        <div className="section-shell relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
<<<<<<< HEAD
                Gujarati Board and CBSE support for Grade 1 to 10
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[4.25rem]">
                Personal tutoring that makes daily study easier
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
                {siteConfig.name} supports Maths, Science, English, Gujarati
                medium, Hindi tutorial, and spoken English through home tuition,
                online guidance, and revision-friendly lessons.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/tutorials" className={buttonVariants({ variant: "primary" })}>
                  View Tutorials
                </Link>
                <a href={`tel:${siteConfig.phone}`} className={buttonVariants({ variant: "secondary" })}>
                  <PlayCircle className="h-4 w-4" />
                  Call {siteConfig.phone}
                </a>
=======
                Trusted by 4,800+ ambitious students
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[4.25rem]">
                We Help You Achieve Academic Success
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
                Expert tuition classes with recorded video lessons, structured
                practice, and clear learning pathways for boards, entrance exams,
                and language goals.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/tutorials" className={buttonVariants({ variant: "primary" })}>
                  Start Learning
                </Link>
                <Link href="/tutorials/jee-foundation-mathematics" className={buttonVariants({ variant: "secondary" })}>
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo
                </Link>
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[26px] border border-white/12 bg-white/10 px-5 py-4 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="">
              <div className="relative mx-auto max-w-[540px]">
                <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-4 shadow-soft backdrop-blur">
                  <div className="relative h-[440px] overflow-hidden rounded-[28px]">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                      alt="Students in a modern learning environment"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-6 right-0 z-0 hidden max-w-[220px] rounded-[30px] border border-white/20 bg-primary p-6 text-white shadow-[0_26px_60px_rgba(30,58,138,0.32)] sm:block">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">
<<<<<<< HEAD
                    Class Support
                  </p>
                  <p className="mt-3 text-sm leading-7 text-blue-50">
                    Home tuition, online help, and revision support that keeps students consistent.
=======
                    Structured Practice
                  </p>
                  <p className="mt-3 text-sm leading-7 text-blue-50">
                    Weekly tests, topic drills, and mentor-reviewed feedback loops.
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                  </p>
                </div>
                <div className="absolute right-10 top-8 z-10 max-w-[240px] rounded-[30px] border border-white/80 bg-white p-6 shadow-soft sm:right-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
<<<<<<< HEAD
                    Subjects Covered
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {siteConfig.focusAreas.map((item) => (
=======
                    Recorded Learning
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {[
                      "Replay difficult concepts anytime",
                      "Short revision modules for exams",
                      "Faculty-led doubt support",
                    ].map((item) => (
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell relative -mt-14 pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <Card className="group h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-slate">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Tutorials"
            title="High-conviction courses designed like premium listings"
            description="A modern catalogue experience with strong visuals, clean information hierarchy, and clear conversion paths into detailed course pages."
          />
          <Link href="/tutorials" className={buttonVariants({ variant: "outline" })}>
            Explore All Tutorials
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {featuredTutorials.map((tutorial, index) => (
            <Reveal key={tutorial.slug} delay={index * 0.06}>
              <TutorialCard tutorial={tutorial} compact />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Student Reviews"
            title="Results students can actually describe"
            description="The feedback experience follows the same soft-card visual language as the rest of the site, keeping the page credible and conversion-focused."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.07}>
                <Card className="h-full p-7">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    {testimonial.feedback}
                  </p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="font-semibold text-slate">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.grade}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything students need to stay consistent"
<<<<<<< HEAD
          description="The learning experience is built around clarity, supportive teaching, repeatable revision, and practical guidance for families."
=======
          description="The platform is designed around retention: strong teaching, repeatable revision, responsive support, and pricing that feels accessible."
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.07}>
                <Card className="h-full p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-slate">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-6 sm:py-10">
        <Reveal>
          <div className="overflow-hidden rounded-[34px] bg-primary px-8 py-10 text-white shadow-soft sm:px-12 sm:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
                  Ready To Start
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
<<<<<<< HEAD
                  Start with the right subject plan for your child
                </h2>
              </div>
              <Link href="/register" className={buttonVariants({ variant: "secondary" })}>
                Book Admission Help
=======
                  Join Today and Start Your Learning Journey
                </h2>
              </div>
              <Link href="/register" className={buttonVariants({ variant: "secondary" })}>
                Enroll Now
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Latest From The Blog"
            title="Helpful content that supports enrolment and retention"
            description="Blog cards mirror the premium tutorial cards, helping the website feel consistent while giving parents and students helpful reasons to trust the brand."
          />
          <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
            View All Posts
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeBlogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Contact Us"
              title="Talk to an academic advisor today"
<<<<<<< HEAD
              description="Share the class, subject, or board you are targeting. We will help you choose the right support, teaching mode, and next step."
=======
              description="Share the class, subject, or exam you are targeting. We will recommend the right recorded modules, test plan, and mentor support."
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  Office Hours
                </p>
                <p className="mt-3 text-lg font-semibold text-slate">
                  Monday to Saturday
                </p>
                <p className="mt-1 text-sm text-slate-500">9:00 AM to 7:00 PM</p>
              </Card>
              <Card className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  Response Time
                </p>
                <p className="mt-3 text-lg font-semibold text-slate">
<<<<<<< HEAD
                  Call or WhatsApp
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {siteConfig.phone}
=======
                  Within 1 working day
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Course advice, demos, and fee details
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                </p>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
