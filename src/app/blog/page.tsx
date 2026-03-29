import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/blog-card";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogHighlights, blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
<<<<<<< HEAD
  description: "Read Alfa D Tutoring articles on study routines, revision planning, and effective learning habits.",
=======
  description: "Read Academic Edge articles on study routines, exam strategy, and effective learning systems.",
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
};

export default function BlogPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Blog"
          title="Useful guidance for students and parents"
          description="The blog section keeps the same premium spacing and card language as the rest of the site while giving the brand more credibility and SEO reach."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {blogHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <Reveal key={highlight.title} delay={index * 0.08}>
              <Card className="h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-slate">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlight.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.06}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}
