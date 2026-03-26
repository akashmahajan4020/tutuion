"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [isSent, setIsSent] = useState(false);

  return (
    <form
      className="card-surface grid gap-4 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        startTransition(async () => {
          await new Promise((resolve) => setTimeout(resolve, 700));
          setIsSent(true);
          form.reset();
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate">
          Full Name
          <input
            required
            type="text"
            placeholder="Your name"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          Email Address
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate">
        Subject
        <input
          required
          type="text"
          placeholder="How can we help?"
          className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate">
        Message
        <textarea
          required
          placeholder="Tell us about the student, class, or subject"
          rows={5}
          className="rounded-[24px] border border-slate-200 px-4 py-3 outline-none transition focus:border-secondary"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          We typically respond within one working day.
        </p>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {isSent ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
      ) : null}
    </form>
  );
}
