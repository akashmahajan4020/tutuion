"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="card-surface grid gap-4 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
          setMessage("");
          const response = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              course: formData.get("course"),
            }),
          });

          const payload = await response.json();
          setMessage(payload.message);
          form.reset();
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate">
          Student Name
          <input
            required
            name="name"
            type="text"
            placeholder="Enter full name"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          Email Address
          <input
            required
            name="email"
            type="email"
            placeholder="student@example.com"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate">
          Phone Number
          <input
            required
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate">
          Preferred Course
          <select
            required
            name="course"
            className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
          >
            <option value="">Select a course</option>
            <option value="JEE Foundation Mathematics">JEE Foundation Mathematics</option>
            <option value="NEET Biology Masterclass">NEET Biology Masterclass</option>
            <option value="CBSE Physics Numericals">CBSE Physics Numericals</option>
            <option value="IELTS Writing Intensive">IELTS Writing Intensive</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate">
        Goals
        <textarea
          rows={4}
          placeholder="Share the exam, subject, or academic goal"
          className="rounded-[24px] border border-slate-200 px-4 py-3 outline-none transition focus:border-secondary"
        />
      </label>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          A coordinator will contact you to complete onboarding.
        </p>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Register Now"}
        </Button>
      </div>
      {message ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {message}
        </p>
      ) : null}
    </form>
  );
}
