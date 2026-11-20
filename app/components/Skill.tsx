import type { Metadata } from "next";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { SkillsSection } from "./PortfolioSections";

export const metadata: Metadata = {
  title: "Skills | Mandlenkosi Zulu",
  description: "Explore Mandlenkosi Zulu's software development, design, and technical skills.",
};

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="skills" />
      <main>
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
