import type { Metadata } from "next";

import { RegisterForm } from "@/components/forms/register-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Register",
  description: "Enroll with Academic Edge and let our team guide you to the right tuition plan.",
};

export default function RegisterPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Enroll Now"
            title="Create your personalised learning plan"
            description="Tell us what the student is preparing for and we will match them with the right recorded course, mentor support, and fee plan."
          />
          <div className="grid gap-5">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                What happens next
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                <li>One of our advisors reviews your academic goals.</li>
                <li>We recommend the right tutorial package and class structure.</li>
                <li>Your onboarding call confirms the schedule, demo, and payment plan.</li>
              </ul>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Best for
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Board students, JEE and NEET aspirants, revision-focused learners,
                and students who want recorded classes with flexible access.
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
