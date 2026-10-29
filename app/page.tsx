import React from "react"
import ThemeToggle from "./theme-toggle"

const projects = [
  {
    name: "SurePadi for Polaris Bank",
    description:
      "Worked on digital banking experiences that supported customer access and everyday financial workflows.",
    tag: "Banking",
  },
  {
    name: "Solana Pawn Shop",
    description:
      "A crypto-native lending concept that turns NFTs into quick liquidity.",
    tag: "Web3",
  },
  {
    name: "SmartHarvest",
    description:
      "Digital tools for improving agricultural operations and decision-making.",
    tag: "AgriTech",
  },
  {
    name: "GGivers",
    description:
      "A lightweight giving experience designed to make donations feel seamless.",
    tag: "FinTech",
  },
  {
    name: "TheCommunity",
    description:
      "A storytelling platform built around personal narratives and shared experiences.",
    tag: "Media",
  },
  {
    name: "A Plus - Academic Assistant",
    description:
      "A student-focused tracker for keeping coursework, goals, and progress in view.",
    tag: "EdTech",
  },
  {
    name: "Fast Klinik",
    description:
      "A hospital management product aimed at reducing operational friction.",
    tag: "HealthTech",
  },
]

const employers = [
  { company: "Roja Technologies", role: "Co-Founder / CTO" },
  { company: "NNPC", role: "APPLICATIONS DEV&INFO MGT ANALYST" },
  { company: "Gopuff", role: "Software Engineer" },
  { company: "AppZone Group", role: "Software Engineer" },
]

const links = [
  { label: "GitHub", href: "https://github.com/osarogie" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nosakhare" },
  { label: "Email", href: "mailto:hello@osarogie.com" },
]

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      width="20"
      height="20"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Index() {
  return (
    <main id="top" className="portfolio">
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <div className="page-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="wordmark" href="#top">
            Osarogie<span aria-hidden="true">.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="mailto:hello@osarogie.com">
              Let’s talk <Arrow />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        <header className="intro">
          <div className="intro-heading">
            <h1>
              Emmanuel
              <br />
              <span>Nosakhare</span>
            </h1>
            <p className="role">
              Co-Founder &amp; CTO at{" "}
              <a href="https://getroja.com/about">Roja Technologies</a>
            </p>
          </div>
          <div className="intro-details">
            <p className="intro-copy">
              I lead technology at Roja Technologies, building infrastructure
              for credibility-driven peer-to-peer lending. My work spans
              architecture, integration, and delivery across energy, commerce,
              and fintech, including NNPC, Gopuff, and AppZone.
            </p>
            <div className="experience-note">
              <span className="experience-value">10+</span>
              <p>
                Years shipping software from agency banking and payments to
                energy and commerce
              </p>
            </div>
            <div className="education">
              <p>
                <span>Nexford University</span> — MSc, Data Analytics (in view)
              </p>
              <p>
                <span>Benson Idahosa University</span> — BSc, Computer Science
              </p>
            </div>
          </div>
        </header>

        <div className="content-grid">
          <section id="work" className="work" aria-labelledby="work-title">
            <h2 id="work-title">Selected work</h2>
            <p className="section-description">
              Products delivered for serious operators
            </p>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <span className="project-tag">{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="sidebar">
            <section className="connect" aria-labelledby="connect-title">
              <h2 id="connect-title">Open to thoughtful collaboration</h2>
              <p>
                I&apos;ve helped build for Polaris Bank, Access, Candis, and
                NipeX. If you need an engineer who cares about product quality
                and execution, let&apos;s talk.
              </p>
              <a className="contact-link" href="mailto:hello@osarogie.com">
                Email me <Arrow />
              </a>
              <div className="social-links">
                {links
                  .filter((link) => link.label !== "Email")
                  .map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label} <Arrow />
                    </a>
                  ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="career" aria-labelledby="career-title">
          <h2 id="career-title">Companies I&apos;ve worked with</h2>
          <ul>
            {employers.map((job) => (
              <li key={job.company}>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="site-footer">
          <span>Emmanuel Nosakhare</span>
          <a href="#top">
            Back to top <Arrow />
          </a>
        </footer>
      </div>
    </main>
  )
}
