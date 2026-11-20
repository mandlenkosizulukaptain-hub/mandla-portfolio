import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { ProjectsSection } from "../../components/PortfolioSections";

export const metadata: Metadata = {
  title: "Projects | Mandlenkosi Zulu",
  description: "Selected software and visual design projects by Mandlenkosi Zulu.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="projects" />
      <main>
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
