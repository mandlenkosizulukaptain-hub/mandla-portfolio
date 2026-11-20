import Link from "next/link";
import ContactForm from "./ContactForm";

type SectionHeadingLevel = "h1" | "h2";

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

export function AboutSection({
  headingLevel = "h1",
}: {
  headingLevel?: SectionHeadingLevel;
}) {
  const Heading = headingLevel;

  return (
    <section className="about section-shell section-divider" id="about">
      <div className="section-intro">
        <p className="eyebrow">A little about me</p>
        <Heading>
          <span className="about-heading-first-line glass-text">TURNING IDEAS INTO</span>
          <span className="about-heading-second-line glass-text">REAL EXPERIENCE.</span>
        </Heading>
      </div>
      <div className="about-content">
        <div className="about-copy">
          <p>
            My journey into technology began with curiosity and a desire to
            create. Through continuous learning and my six-month software
            development journey at Uncommon.org, I&apos;ve developed a growing
            foundation in web development, programming and UI/UX design.
          </p>
          <p>
            I enjoy exploring how technology works, solving problems through
            code, and transforming ideas into functional, user-friendly
            applications. From building my first websites to working with
            modern technologies like React, Next.js and Python, every project
            is another opportunity to learn and grow.
          </p>
          <p>
            I&apos;m still growing, still experimenting, and always looking for
            new challenges that push me closer to becoming the software
            engineer I aspire to be.
          </p>
          <p>
            My current interests include full-stack development, UI/UX design,
            and finding simple solutions to everyday problems.
          </p>
          <Link className="text-link" href="/projects">
            Explore my work <ArrowIcon />
          </Link>
        </div>
        <div className="values-grid">
          <article className="value-card" tabIndex={0}>
            <span className="value-icon icon-purple">01</span>
            <div>
              <h3>Curiosity-driven</h3>
              <p className="card-hover-reveal">
                Always exploring, questioning and discovering new possibilities
                through technology.
              </p>
            </div>
          </article>
          <article className="value-card" tabIndex={0}>
            <span className="value-icon icon-blue">02</span>
            <div>
              <h3>Problem solver</h3>
              <p className="card-hover-reveal">
                Turning challenges into opportunities through creative thinking
                and code.
              </p>
            </div>
          </article>
          <article className="value-card" tabIndex={0}>
            <span className="value-icon icon-pink">03</span>
            <div>
              <h3>Committed to growth</h3>
              <p className="card-hover-reveal">
                Learning continuously, building projects and improving with
                every experience.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Framework",
    items: ["Django"],
  },
  {
    category: "Version control",
    items: ["Git", "GitHub"],
  },
  {
    category: "Design",
    items: ["Figma", "Canva"],
  },
  {
    category: "Tools",
    items: ["Lovable", "Adobe Firefly"],
  },
];

export function SkillsSection({
  headingLevel = "h1",
}: {
  headingLevel?: SectionHeadingLevel;
}) {
  const Heading = headingLevel;

  return (
    <section className="skills section-shell section-divider" id="skills">
      <div className="section-heading centered">
        <p className="eyebrow">My toolkit</p>
        <Heading>
          <span className="skills-heading-first-line glass-text">SKILLS &amp;</span>
          <span className="skills-heading-second-line glass-text">TECHNOLOGIES</span>
        </Heading>
        <p className="section-subtitle">
          A growing set of tools for building, designing, and bringing ideas to life.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-card" key={group.category} tabIndex={0}>
            <div className={`skill-number skill-color-${index + 1}`}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3>{group.category}</h3>
              <div className="skill-tags card-hover-reveal">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection({
  headingLevel = "h1",
}: {
  headingLevel?: SectionHeadingLevel;
}) {
  const Heading = headingLevel;

  return (
    <section className="projects section-shell section-divider" id="projects">
      <div className="section-heading centered project-heading">
        <div>
          <p className="eyebrow">A few things I&apos;ve worked on</p>
          <Heading>
            <span className="projects-heading-first-line glass-text">SELECTED</span>
            <span className="projects-heading-second-line glass-text">PROJECTS</span>
          </Heading>
        </div>
        <a
          className="text-link"
          href="https://github.com/mandlenkosizulukaptain-hub"
          target="_blank"
          rel="noreferrer"
        >
          Browse GitHub <ArrowIcon />
        </a>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <a
            className="project-visual solar-visual"
            href="https://nyamatusi-safari.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Nyamatusi Safari website"
          >
            <div className="project-browser">
              <div className="browser-top">
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-address">nyamatusi / safari</span>
                <span className="browser-menu">...</span>
              </div>
              <div className="solar-screen">
                <span className="solar-kicker">EXPLORE THE WILD</span>
                <strong>Discover unforgettable<br />African safaris.</strong>
                <span className="solar-action">Explore safaris <ArrowIcon /></span>
                <div className="solar-sun" />
                <div className="solar-panel panel-one" />
                <div className="solar-panel panel-two" />
              </div>
            </div>
            <span className="project-index">PROJECT / 01</span>
          </a>
          <div className="project-details">
            <div>
              <p className="project-type card-hover-reveal">Safari · Travel website</p>
              <h3>Nyamatusi Safari</h3>
              <p className="project-description card-hover-reveal">
                A responsive safari website showcasing wildlife experiences,
                destinations, accommodations, and bookings.
              </p>
              <div className="project-tags card-hover-reveal">
                <span>React</span><span>Vite</span><span>Travel</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://nyamatusi-safari.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Nyamatusi Safari website"
            >
              <ArrowIcon />
            </a>
          </div>
        </article>

        <article className="project-card">
          <a
            className="project-visual design-visual"
            href="https://www.canva.com/design/DAHT3QEvv2s/LH9Yy3ZSRZLJdw9JaGL0Og/edit"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Canva design"
          >
            <div className="design-sheet">
              <span className="design-label">CANVA / DESIGN</span>
              <span className="design-title">Ideas into<br />experiences.</span>
              <span className="design-shape shape-large" />
              <span className="design-shape shape-small" />
              <span className="design-line" />
              <span className="design-footer">MANDLENKOSI ZULU</span>
            </div>
            <span className="project-index">PROJECT / 02</span>
          </a>
          <div className="project-details">
            <div>
              <p className="project-type card-hover-reveal">Visual design · Canva</p>
              <h3>Design project</h3>
              <p className="project-description card-hover-reveal">
                A visual project created in Canva. Open the original to explore it.
              </p>
              <div className="project-tags card-hover-reveal">
                <span>Canva</span><span>Visual design</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://www.canva.com/design/DAHT3QEvv2s/LH9Yy3ZSRZLJdw9JaGL0Og/edit"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Canva design"
            >
              <ArrowIcon />
            </a>
          </div>
        </article>

        <article className="project-card">
          <a
            className="project-visual school-visual"
            href="https://gwayisecondary.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Secondary School Website"
          >
            <div className="school-preview">
              <div className="school-preview-header">
                <span>SECONDARY SCHOOL</span>
                <span>ABOUT&nbsp;&nbsp; ACADEMICS&nbsp;&nbsp; ADMISSIONS</span>
              </div>
              <div className="school-preview-content">
                <span className="school-kicker">LEARN · GROW · LEAD</span>
                <strong>Building bright<br />futures together.</strong>
                <span className="school-action">Discover our school</span>
              </div>
              <div className="school-preview-footer">
                ACADEMICS · NEWS · COMMUNITY
              </div>
            </div>
            <span className="project-index">PROJECT / 03</span>
          </a>
          <div className="project-details">
            <div>
              <p className="project-type card-hover-reveal">School website · React</p>
              <h3>Secondary School Website</h3>
              <p className="project-description card-hover-reveal">
                A responsive school website featuring academics, admissions,
                news, a gallery, and FAQs.
              </p>
              <div className="project-tags card-hover-reveal">
                <span>React</span><span>Vite</span><span>Tailwind CSS</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://gwayisecondary.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Secondary School Website"
            >
              <ArrowIcon />
            </a>
          </div>
        </article>

        <article className="project-card">
          <a
            className="project-visual weather-visual"
            href="https://precious-churros-80eb2b.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Weather Forecast App"
          >
            <div className="weather-preview">
              <div className="weather-preview-header">
                <span>WEATHER WORLD</span>
                <span className="weather-preview-sun" aria-hidden="true">☀</span>
              </div>
              <div className="weather-preview-current">
                <div>
                  <span className="weather-preview-label">YOUR CITY</span>
                  <strong>Harare</strong>
                  <span className="weather-preview-condition">Live weather forecast</span>
                </div>
                <span className="weather-preview-cloud" aria-hidden="true">☁</span>
              </div>
              <div className="weather-preview-forecasts">
                <span>NOW</span>
                <span>HOURLY</span>
                <span>7-DAY</span>
              </div>
              <span className="weather-preview-source">POWERED BY OPEN-METEO</span>
            </div>
            <span className="project-index">PROJECT / 04</span>
          </a>
          <div className="project-details">
            <div>
              <p className="project-type card-hover-reveal">Weather · JavaScript</p>
              <h3>Weather Forecast App</h3>
              <p className="project-description card-hover-reveal">
                Search for a city to see current conditions, hourly updates,
                and a seven-day forecast.
              </p>
              <div className="project-tags card-hover-reveal">
                <span>JavaScript</span><span>Open-Meteo</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://precious-churros-80eb2b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Weather Forecast App"
            >
              <ArrowIcon />
            </a>
          </div>
        </article>

        <article className="project-card">
          <a
            className="project-visual design-visual"
            href="https://www.canva.com/design/DAHStkf2L_M/sV2XAKSavkRslKHDxX_llw/edit"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Canva project"
          >
            <div className="design-sheet">
              <span className="design-label">CANVA / PROJECT</span>
              <span className="design-title">Create.<br />Connect. Inspire.</span>
              <span className="design-shape shape-large" />
              <span className="design-shape shape-small" />
              <span className="design-line" />
              <span className="design-footer">MANDLENKOSI ZULU</span>
            </div>
            <span className="project-index">PROJECT / 05</span>
          </a>
          <div className="project-details">
            <div>
              <p className="project-type card-hover-reveal">Graphic design · Canva</p>
              <h3>Canva Design Project</h3>
              <p className="project-description card-hover-reveal">
                Another visual project created in Canva.
              </p>
              <div className="project-tags card-hover-reveal">
                <span>Canva</span><span>Graphic design</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://www.canva.com/design/DAHStkf2L_M/sV2XAKSavkRslKHDxX_llw/edit"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Canva project"
            >
              <ArrowIcon />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export function ConnectSection({
  headingLevel = "h1",
  showContactForm = false,
}: {
  headingLevel?: SectionHeadingLevel;
  showContactForm?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <section className="connect section-shell section-divider" id="connect">
      <div
        className={
          showContactForm
            ? "connect-layout connect-layout-with-form"
            : "connect-layout"
        }
      >
        <div className="connect-card">
          <div className="connect-orb" />
          <div className="connect-copy">
            <p className="eyebrow">What&apos;s next?</p>
            <Heading>
              <span className="connect-heading-first-line glass-text">
                Let&apos;s make something
              </span>
              <span className="connect-heading-second-line glass-text">
                meaningful.
              </span>
            </Heading>
            <p className="card-hover-reveal">
              I&apos;m open to thoughtful collaborations and new opportunities.
              Call, text, email, or send me a message here.
            </p>
          </div>
          <div className="connect-actions">
            <a className="button button-primary" href="tel:+263777133443">
              Call me
            </a>
            <a className="button button-outline" href="sms:+263777133443">
              Send me a text
            </a>
            <a
              className="button button-outline"
              href="mailto:mandlenkosizulukaptain@gmail.com"
            >
              Email me
            </a>
            <a
              className="button button-outline"
              href="https://github.com/mandlenkosizulukaptain-hub"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <ArrowIcon />
            </a>
            <a
              className="button button-outline"
              href="https://www.canva.com/design/DAHStkf2L_M/sV2XAKSavkRslKHDxX_llw/edit"
              target="_blank"
              rel="noreferrer"
            >
              View design work
            </a>
          </div>
        </div>
        {showContactForm && <ContactForm />}
      </div>
    </section>
  );
}
