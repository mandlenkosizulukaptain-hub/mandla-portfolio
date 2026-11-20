import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { ConnectSection } from "../../components/PortfolioSections";

export const metadata: Metadata = {
  title: "Connect | Mandlenkosi Zulu",
  description: "Get in touch with Mandlenkosi Zulu and explore his design and software work.",
};

export default function ConnectPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="connect" />
      <main>
        <ConnectSection showContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
