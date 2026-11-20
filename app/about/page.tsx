import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { AboutSection } from "../../components/PortfolioSections";

export const metadata: Metadata = {
  title: "About | Mandlenkosi Zulu",
  description:
    "Learn about Mandlenkosi Zulu, a software engineer interested in full-stack development, UI/UX design, and building useful web applications.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="about" />
      <main>
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
