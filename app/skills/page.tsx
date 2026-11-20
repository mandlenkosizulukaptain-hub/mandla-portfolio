import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { SkillsSection } from "../../components/PortfolioSections";

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
