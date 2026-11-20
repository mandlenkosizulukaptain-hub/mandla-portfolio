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
        <Link href="/#home" aria-current={activePage === "home" ? "page" : undefined}>
          HOME
        </Link>
        <Link href="/about" aria-current={activePage === "about" ? "page" : undefined}>
          ABOUT
        </Link>
        <Link href="/skills" aria-current={activePage === "skills" ? "page" : undefined}>
          SKILLS
        </Link>
        <Link href="/projects" aria-current={activePage === "projects" ? "page" : undefined}>
          PROJECTS
        </Link>
        <Link href="/connect" aria-current={activePage === "connect" ? "page" : undefined}>
          CONNECT
        </Link>
      </nav>

      <a
        className="button button-small button-primary header-cta"
        href="/Mandlenkosi%20E.pdf"
        download="Mandlenkosi E.pdf"
      >
        Download my CV <DownloadIcon />
      </a>
    </header>
  );
}
