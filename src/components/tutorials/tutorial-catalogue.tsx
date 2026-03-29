"use client";

import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";

import { tutorials } from "@/data/site";

import { TutorialCard } from "./tutorial-card";

type Tutorial = (typeof tutorials)[number];

type TutorialCatalogueProps = {
  tutorials: readonly Tutorial[];
  categories: string[];
};

export function TutorialCatalogue({
  tutorials,
  categories,
}: TutorialCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const normalized = deferredQuery.trim().toLowerCase();
  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      activeCategory === "All" || tutorial.category === activeCategory;
    const matchesQuery =
      !normalized ||
      tutorial.title.toLowerCase().includes(normalized) ||
      tutorial.description.toLowerCase().includes(normalized) ||
      tutorial.mentor.toLowerCase().includes(normalized);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8">
      <div className="card-surface p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:max-w-md lg:flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tutorials, teachers, or categories"
              className="h-14 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate outline-none transition focus:border-secondary"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredTutorials.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} compact />
          ))}
        </div>
      ) : (
        <div className="card-surface p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-slate">
            No tutorials matched your search
          </h3>
          <p className="mt-3 text-sm text-slate-500">
            Try a broader keyword or switch back to a different category.
          </p>
        </div>
      )}
    </div>
  );
}
