import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {description ? <p className="body-copy mt-5">{description}</p> : null}
    </div>
  );
}
