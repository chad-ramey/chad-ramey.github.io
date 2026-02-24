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
            Sr. Systems Engineer with 10+ years building and scaling enterprise collaboration 
            ecosystems — Google Workspace, Slack, and SaaS infrastructure for organizations 
            up to 40,000 users. I care about automation-first engineering, eliminating 
            operational toil, and making complex systems feel manageable. Currently focused 
            on enterprise tooling, SaaS optimization, and platform consolidation.
          </p>
        </Section>

        <Section title="Experience">
          <div className="space-y-8">
            <ExperienceItem
              role="Collaboration Engineer"
              company="Nebius"
              period="2025 — Present"
              description="Collaboration and enterprise systems engineering for a next-generation cloud platform."
            />
            <ExperienceItem
              role="Sr. Collaboration Systems Engineer"
              company="Peloton Interactive"
              period="2021 — 2025"
              description="Engineered GW license reclamation program recovering 2,440+ licenses; eliminated $17K/month in Microsoft licensing waste. Led LastPass → 1Password and Lucidchart → Miro enterprise migrations, both at 100% completion. Built automated Google Groups backup system, hardened Workspace security posture, and maintained a 96.7% Jira ticket completion rate."
            />
            <ExperienceItem
              role="SaaS Systems Engineer"
              company="Uber Technologies"
              period="2020 — 2021"
              description="Technical lead for 10+ M&A transactions and divestitures. Drove ~$800K in annual SaaS cost avoidance through license rightsizing. Led ATG/Aurora Google Drive migration of 336K+ files and 171K+ emails in 144 consecutive hours — 5 months ahead of deadline."
            />
            <ExperienceItem
              role="Sr. Service Desk Technician"
              company="Uber Technologies"
              period="2015 — 2020"
              description="Lead technician supporting 40,000+ global employees. Built Slack Global Dynamic Channels, Phoenix macOS imaging infrastructure, and Uber's Legal Hold process for IT hardware. Trained and mentored L1/L2 technicians, contributing to 3 internal promotions."
            />
            <ExperienceItem
              role="IT Technician"
              company="Yelp"
              period="2014 — 2015"
              description="L1/L2 support across global employee base. Supported AV conferencing systems and assisted with Aruba network upgrade and Scottsdale office buildout."
            />
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-8">
            <ExperienceItem
              role="AAS, Computer Technology"
              company="Rio Salado College"
            />
            <ExperienceItem
              role="AA, Liberal Arts"
              company="Glendale Community College"
            />
            <ExperienceItem
              role="AA, Management"
              company="Community College of the Air Force"
            />
          </div>
        </Section>

        <Section title="Skills">
          <p className="text-base leading-relaxed text-muted-foreground">
            Google Workspace, Slack, Microsoft 365, Okta, Atlassian, PowerShell, Python, 
            Google Apps Script, GAM/GAMADV-XTD, Bash, API Integrations, GCP, Azure, AWS, 
            SailPoint IIQ, 1Password, Jira, Splunk, PagerDuty, GitHub, Docker
          </p>
        </Section>

        <Section title="Contact">
          <div className="space-y-1">
            <a href="mailto:mail@chadramey.com" className="block text-base text-foreground underline decoration-border underline-offset-4 hover:decoration-accent transition-colors">
              mail@chadramey.com
            </a>
            <a href="https://www.linkedin.com/in/chadramey/" target="_blank" rel="noopener noreferrer" className="block text-base text-muted-foreground underline decoration-border underline-offset-4 hover:decoration-accent hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/chad-ramey" target="_blank" rel="noopener noreferrer" className="block text-base text-muted-foreground underline decoration-border underline-offset-4 hover:decoration-accent hover:text-foreground transition-colors">
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
