import type { Metadata } from "next";
import Image from "next/image";
import { BookOpenText, Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Alfa D Tutoring for admissions help, subject guidance, and phone or WhatsApp support.",
};

export default function ContactPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Speak with our admissions team"
            description="Need help choosing the right class support, subject plan, or teaching mode? Share your requirement and we will guide you to the next step."
          />
          <div className="grid gap-5">
            <Card className="flex gap-4 p-6">
              <BookOpenText className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold text-slate">Availability</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {siteConfig.availability}
                </p>
              </div>
            </Card>
            <Card className="flex gap-4 p-6">
              <Phone className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold text-slate">Phone / WhatsApp</p>
                <a href={`tel:${siteConfig.phone}`} className="mt-2 block text-sm text-slate-600">
                  {siteConfig.phone}
                </a>
              </div>
            </Card>
            <Card className="flex gap-4 p-6">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold text-slate">Subjects We Cover</p>
                <div className="mt-2 grid gap-2 text-sm text-slate-600">
                  {siteConfig.focusAreas.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="relative overflow-hidden rounded-[34px]">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
              alt="Tutoring consultation"
              width={960}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
