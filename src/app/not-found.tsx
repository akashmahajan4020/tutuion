import Link from "next/link";

import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="section-shell py-20">
      <Card className="mx-auto max-w-2xl p-10 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-slate">
          Page not found
        </h1>
        <p className="mt-4 body-copy">
          The page you requested does not exist or may have moved.
        </p>
        <div className="mt-8">
          <Link href="/" className={buttonVariants({ variant: "primary" })}>
            Return Home
          </Link>
        </div>
      </Card>
    </main>
  );
}
