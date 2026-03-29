import type { Metadata } from "next";

import { RegisterForm } from "@/components/forms/register-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Register",
<<<<<<< HEAD
  description: "Enroll with Alfa D Tutoring and let our team guide you to the right subject support plan.",
=======
  description: "Enroll with Academic Edge and let our team guide you to the right tuition plan.",
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
};

export default function RegisterPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Enroll Now"
            title="Create your personalised learning plan"
<<<<<<< HEAD
            description="Tell us the student&apos;s class, subject needs, and learning goals. We will recommend the right support and next step."
=======
            description="Tell us what the student is preparing for and we will match them with the right recorded course, mentor support, and fee plan."
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
          />
          <div className="grid gap-5">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                What happens next
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
<<<<<<< HEAD
                <li>One of our advisors reviews the student&apos;s class and weak subjects.</li>
                <li>We recommend the right tutoring format and subject plan.</li>
                <li>Your onboarding call confirms the schedule and next admission step.</li>
=======
                <li>One of our advisors reviews your academic goals.</li>
                <li>We recommend the right tutorial package and class structure.</li>
                <li>Your onboarding call confirms the schedule, demo, and payment plan.</li>
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
              </ul>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Best for
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
<<<<<<< HEAD
                Grade 1 to 10 students who need support in Maths, Science, English,
                Gujarati medium learning, Hindi tutorial guidance, or spoken English.
=======
                Board students, JEE and NEET aspirants, revision-focused learners,
                and students who want recorded classes with flexible access.
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
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
