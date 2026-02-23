import Section from "@/components/Section";
import Header from "@/components/Header";
import ExperienceItem from "@/components/ExperienceItem";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Header />

        <Section title="About">
          <p className="text-base leading-relaxed text-muted-foreground">
            Designer and engineer with 8+ years building digital products. 
            I care deeply about craft, clarity, and making complex things feel simple. 
            Currently focused on design systems, typography, and developer tools.
          </p>
        </Section>

        <Section title="Experience">
          <div className="space-y-8">
            <ExperienceItem
              role="Senior Product Designer"
              company="Studio Co."
              period="2022 — Present"
              description="Leading design for a suite of creative tools. Established the design system, led a rebrand, and shipped 3 major product launches."
            />
            <ExperienceItem
              role="Design Engineer"
              company="Forma Labs"
              period="2019 — 2022"
              description="Built and maintained the component library. Worked across product, engineering, and brand to ship features used by 200k+ users."
            />
            <ExperienceItem
              role="UI Designer"
              company="Basecamp Digital"
              period="2017 — 2019"
              description="Designed interfaces for web and mobile applications. Collaborated closely with developers to ensure pixel-perfect implementation."
            />
            <ExperienceItem
              role="Freelance Designer"
              company="Independent"
              period="2015 — 2017"
              description="Worked with startups and agencies on branding, web design, and product strategy."
            />
          </div>
        </Section>

        <Section title="Education">
          <ExperienceItem
            role="B.A. Visual Communication"
            company="School of Design, Berlin"
            period="2012 — 2015"
          />
        </Section>

        <Section title="Skills">
          <p className="text-base leading-relaxed text-muted-foreground">
            Figma, React, TypeScript, Tailwind CSS, Design Systems, Prototyping, 
            User Research, Information Architecture, Motion Design, Print & Editorial
          </p>
        </Section>

        <Section title="Contact">
          <div className="space-y-1">
            <a href="mailto:hello@example.com" className="block text-base text-foreground underline decoration-border underline-offset-4 hover:decoration-accent transition-colors">
              hello@example.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-base text-muted-foreground underline decoration-border underline-offset-4 hover:decoration-accent hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-base text-muted-foreground underline decoration-border underline-offset-4 hover:decoration-accent hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </Section>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 — Built with care.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
