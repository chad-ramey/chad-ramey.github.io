import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
