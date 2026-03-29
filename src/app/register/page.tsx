import type { Metadata } from "next";

import { RegisterForm } from "@/components/forms/register-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Register",
  description: "Enroll with Alfa D Tutoring and let our team guide you to the right subject support plan.",
};

export default function RegisterPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Enroll Now"
            title="Create your personalised learning plan"
            description="Tell us the student&apos;s class, subject needs, and learning goals. We will recommend the right support and next step."
          />
          <div className="grid gap-5">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                What happens next
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                <li>One of our advisors reviews the student&apos;s class and weak subjects.</li>
                <li>We recommend the right tutoring format and subject plan.</li>
                <li>Your onboarding call confirms the schedule and next admission step.</li>
              </ul>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Best for
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Grade 1 to 10 students who need support in Maths, Science, English,
                Gujarati medium learning, Hindi tutorial guidance, or spoken English.
              </p>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <RegisterForm />
        </Reveal>
      </div>
    </main>
  );
}
