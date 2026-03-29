"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";

import { siteConfig } from "@/data/site";

import { Button } from "@/components/ui/button";

type LoginFormProps = {
  callbackUrl?: string;
};

export function LoginForm({ callbackUrl = "/" }: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div className="card-surface overflow-hidden">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 p-8 sm:p-10">
          <div>
            <p className="section-kicker">Student Portal</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-slate">
              Login to continue learning
            </h1>
            <p className="mt-4 body-copy">
              Access tutorials, recorded classes, and your study dashboard.
            </p>
          </div>

          <form
<<<<<<< HEAD
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);

              startTransition(async () => {
                setError("");
=======
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            startTransition(async () => {
              setError("");
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d

                const response = await signIn("credentials", {
                  email: String(formData.get("email") ?? ""),
                  password: String(formData.get("password") ?? ""),
                  redirect: false,
                  callbackUrl,
                });

                if (response?.error) {
                  setError("Invalid credentials. Use one of the demo accounts below.");
                  return;
                }

                router.push(response?.url ?? callbackUrl);
                router.refresh();
              });
            }}
          >
            <label className="grid gap-2 text-sm font-medium text-slate">
              Email Address
              <input
                required
                name="email"
                type="email"
<<<<<<< HEAD
                placeholder="student@alfadtutoring.com"
=======
                placeholder="student@academicedge.com"
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate">
              Password
              <input
                required
                name="password"
                type="password"
<<<<<<< HEAD
                placeholder="Enter password"
=======
                placeholder="••••••••"
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
              />
            </label>

            {error ? (
              <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {error}
              </p>
            ) : null}

            <Button type="submit" disabled={isPending} className="mt-2">
              {isPending ? "Signing in..." : "Login"}
            </Button>
          </form>

          <p className="text-sm text-slate-500">
            New here?{" "}
            <Link href="/register" className="font-semibold text-primary">
              Create your learning plan
            </Link>
          </p>
        </div>

        <div className="grid gap-4 bg-slate-950 p-8 text-white sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
              Demo Credentials
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Quick access for testing
            </h2>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-blue-100">Student</p>
            <p className="mt-2 text-sm text-slate-200">
              {siteConfig.demoCredentials.student.email}
            </p>
            <p className="text-sm text-slate-200">
              {siteConfig.demoCredentials.student.password}
            </p>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-blue-100">Admin</p>
            <p className="mt-2 text-sm text-slate-200">
              {siteConfig.demoCredentials.admin.email}
            </p>
            <p className="text-sm text-slate-200">
              {siteConfig.demoCredentials.admin.password}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
