import type { Metadata } from "next";

import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to the Alfa D Tutoring student or admin portal.",
};

type LoginPageProps = {
  searchParams?: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="section-shell py-16 sm:py-20">
      <LoginForm callbackUrl={searchParams?.callbackUrl} />
    </main>
  );
}
