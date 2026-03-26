import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts, getBlogPostBySlug } from "@/data/site";
import { formatLongDate } from "@/lib/utils";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section-shell py-16 sm:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="rounded-[34px] bg-muted p-6 sm:p-8 lg:p-10">
          <p className="section-kicker">{post.category}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{formatLongDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
            <span>{post.author}</span>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <article className="space-y-8">
            <div className="relative h-[360px] overflow-hidden rounded-[34px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <Card className="space-y-8 p-7 sm:p-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-3xl font-semibold text-slate">
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="body-copy">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </Card>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            <Card className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Continue Learning
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate">
                Want help applying this advice?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Explore our tutorials for structured lessons, recorded modules, and
                mentor-supported revision plans.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/tutorials" className={buttonVariants({ variant: "primary" })}>
                  Explore Tutorials
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
                  Talk to an Advisor
                </Link>
              </div>
            </Card>

            <Card className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                More Articles
              </p>
              <div className="mt-5 grid gap-4">
                {blogPosts
                  .filter((item) => item.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="rounded-[24px] border border-slate-200 p-4 transition hover:border-secondary"
                    >
                      <p className="font-semibold text-slate">{relatedPost.title}</p>
                      <p className="mt-2 text-sm text-slate-500">
                        {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
