import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, dark, id }: Props) => (
  <section id={id} className={cn(dark ? "hero-dark" : "bg-background", "py-12 md:py-16", className)}>
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

export default SectionWrapper;
