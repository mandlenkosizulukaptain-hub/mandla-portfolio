import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  AboutSection,
  ConnectSection,
  ProjectsSection,
  SkillsSection,
} from "./components/PortfolioSections";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 12 12 4M5 4h7v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>;
}

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="home" /> 
<main className="snap-home">
      <section className="hero section-shell" id="home">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Software Engineer</p>
        <div className="hero-copy">
          <h1>
            <span className="hero-first-name glass-text">Mandlenkosi</span>
            <span className="hero-last-name glass-text">Zulu.</span>
          </h1>
          <p className="hero-description">
            I build thoughtful, accessible digital experiences for the web.
            I enjoy turning ideas into practical, user-friendly software.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/mandlenkosizulukaptain-hub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
            <a
              className="button button-outline mobile-cv-button"
              href="https://drive.google.com/file/d/1pr8NFLNTp0vKWGniKPjgOCWEyOKSOg4L/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View my CV
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <span>Curious by nature. Focused on building useful things.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Profile illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-glow" />
          <div className="profile-illustration">
            <div className="illustration-grid" />
            <div className="portrait-placeholder">
              <video
                className="portrait-video"
                src="/bridesmaid-inspiration.mp4"
                aria-label="Bridesmaid dress inspiration video"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="profile-label">
              <span className="label-mark"><BrandMark /></span>
              <a
                className="profile-cv-link"
                href="https://drive.google.com/file/d/1pr8NFLNTp0vKWGniKPjgOCWEyOKSOg4L/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View my CV <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="art-sparkle sparkle-one">✳</div>
          <div className="art-sparkle sparkle-two">✦</div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span />
          Scroll to explore
        </div>
      </section>

      <AboutSection headingLevel="h2" />
      <SkillsSection headingLevel="h2" />
      <ProjectsSection headingLevel="h2" />
      <ConnectSection headingLevel="h2" />

      </main>
      <SiteFooter />
    </div>
  );
}
