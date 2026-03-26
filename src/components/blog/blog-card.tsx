import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { blogPosts } from "@/data/site";
import { formatLongDate } from "@/lib/utils";

import { Card } from "@/components/ui/card";

type BlogPost = (typeof blogPosts)[number];

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-primary">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            {formatLongDate(post.publishedAt)}
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-slate">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
