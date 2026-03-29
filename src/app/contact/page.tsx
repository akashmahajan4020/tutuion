import type { Metadata } from "next";
import Image from "next/image";
<<<<<<< HEAD
import { BookOpenText, Mail, Phone } from "lucide-react";
=======
import { Mail, MapPin, Phone } from "lucide-react";
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d

import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
<<<<<<< HEAD
  description: "Reach Alfa D Tutoring for admissions help, subject guidance, and phone or WhatsApp support.",
=======
  description: "Reach Academic Edge for admissions, tutorial demos, fee details, or mentor support.",
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
};

export default function ContactPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Speak with our admissions team"
<<<<<<< HEAD
            description="Need help choosing the right class support, subject plan, or teaching mode? Share your requirement and we will guide you to the next step."
          />
          <div className="grid gap-5">
            <Card className="flex gap-4 p-6">
              <BookOpenText className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold text-slate">Availability</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {siteConfig.availability}
=======
            description="Need help choosing the right subject track, fee plan, or recorded course? Share your requirement and we will recommend the next step."
          />
          <div className="grid gap-5">
            <Card className="flex gap-4 p-6">
              <MapPin className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p className="font-semibold text-slate">Address</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {siteConfig.address}
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                </p>
              </div>
            </Card>
            <Card className="flex gap-4 p-6">
              <Phone className="mt-1 h-5 w-5 text-accent" />
              <div>
<<<<<<< HEAD
                <p className="font-semibold text-slate">Phone / WhatsApp</p>
=======
                <p className="font-semibold text-slate">Phone</p>
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
                <a href={`tel:${siteConfig.phone}`} className="mt-2 block text-sm text-slate-600">
                  {siteConfig.phone}
                </a>
              </div>
            </Card>
            <Card className="flex gap-4 p-6">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <div>
<<<<<<< HEAD
                <p className="font-semibold text-slate">Subjects We Cover</p>
                <div className="mt-2 grid gap-2 text-sm text-slate-600">
                  {siteConfig.focusAreas.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
=======
                <p className="font-semibold text-slate">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-sm text-slate-600"
                >
                  {siteConfig.email}
                </a>
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
              </div>
            </Card>
          </div>
          <div className="relative overflow-hidden rounded-[34px]">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
<<<<<<< HEAD
              alt="Tutoring consultation"
=======
              alt="Academic consultation"
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
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
