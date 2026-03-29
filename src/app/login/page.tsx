import type { Metadata } from "next";

import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Login",
<<<<<<< HEAD
  description: "Login to the Alfa D Tutoring student or admin portal.",
=======
  description: "Login to the Academic Edge student or admin portal.",
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
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
