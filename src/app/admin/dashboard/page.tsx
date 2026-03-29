import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { UploadTutorialForm } from "@/components/admin/upload-tutorial-form";
import { Card } from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import { tutorials } from "@/data/site";

export const metadata: Metadata = {
  title: "Admin Dashboard",
<<<<<<< HEAD
  description: "Manage tutorials, uploads, and overview metrics for Alfa D Tutoring.",
=======
  description: "Manage tutorials, uploads, and overview metrics for Academic Edge.",
>>>>>>> 1d15753c517a3db0650c03bdb78db2cf55e4604d
};

export default async function AdminDashboardPage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login?callbackUrl=/admin/dashboard");
  }

  if (session.user.role !== "admin") {
    return (
      <main className="section-shell py-20">
        <Card className="mx-auto max-w-2xl p-10 text-center">
          <p className="section-kicker">Restricted</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-slate">
            You do not have admin access
          </h1>
          <p className="mt-4 body-copy">
            This dashboard is reserved for administrators who manage tutorial uploads
            and content operations.
          </p>
          <Link href="/" className="mt-6 inline-flex font-semibold text-primary">
            Return to home
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Admin Dashboard</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-slate">
            Manage platform content
          </h1>
          <p className="mt-4 body-copy">
            Upload new tutorials, review content inventory, and monitor high-level
            conversion metrics.
          </p>
        </div>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Tutorials
          </p>
          <p className="mt-4 text-4xl font-semibold text-primary">{tutorials.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Active Students
          </p>
          <p className="mt-4 text-4xl font-semibold text-primary">4,800</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Demo Bookings
          </p>
          <p className="mt-4 text-4xl font-semibold text-primary">126</p>
        </Card>
      </div>

      <UploadTutorialForm />
    </main>
  );
}
