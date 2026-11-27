import Image from "next/image";
import Link from "next/link";

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3 11v2.5h10V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SitePage = "home" | "about" | "skills" | "projects" | "connect";

export default function SiteHeader({ activePage }: { activePage?: SitePage }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mandlenkosi Zulu home">
        <Image
          className="brand-avatar"
          src="/mandlenkosi-profile.png"
          alt=""
          width={42}
          height={42}
          loading="eager"
        />
        <span>Mandlenkosi<span className="brand-dot">.</span></span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" aria-current={activePage === "home" ? "page" : undefined}>
          HOME
        </a>
        <a href="#about">
          ABOUT
        </a>
        <a href="#skills">
          SKILLS
        </a>
        <a href="#projects">
          PROJECTS
        </a>
        <a href="#connect">
          CONNECT
        </a>
      </nav>

      <a
        className="button button-small button-primary header-cta"
        href="https://drive.google.com/uc?export=download&id=1pr8NFLNTp0vKWGniKPjgOCWEyOKSOg4L"
        download="Mandlenkosi Elphas Zulu CV.pdf"
      >
        Download my CV <DownloadIcon />
      </a>
    </header>
  );
}
