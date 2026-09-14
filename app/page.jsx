"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, Database, ExternalLink, Mail, Menu, Server, X } from "lucide-react";

const skillGroups = [
  { label: "Languages & frameworks", icon: Code2, items: ["Java", "JavaScript", "TypeScript", "React", "Node.js", "Express", "AJAX", "Python", "SQL"] },
  { label: "Databases & APIs", icon: Database, items: ["MySQL", "MongoDB", "Firebase", "RESTful APIs"] },
  { label: "DevOps & tools", icon: Server, items: ["Git / GitHub", "Docker", "CI/CD", "Bitbucket Pipelines", "GitHub Actions"] },
];
const projects = [
  { title: "LinkShared", type: "Full-stack application", tags: ["React", "Node.js", "MongoDB"], description: "A frictionless way to share links and text across devices without installing an app.", detail: "Built the React frontend and Node.js / Express backend, with MongoDB handling temporary shared content.", number: "01" },
  { title: "San Francisco Crime Analysis", type: "Data dashboard", tags: ["React", "Node.js", "MongoDB"], description: "An interactive dashboard for visualizing crime trends and supporting administrative data management.", detail: "Designed MongoDB-backed APIs and deployed the dashboard to Heroku for accessible, data-informed exploration.", number: "02" },
  { title: "Stock Portfolio Suggestion Engine", type: "Applied AI / finance", tags: ["Python", "Flask", "Alpha Vantage"], description: "A web-based engine that creates customized stock portfolio suggestions from market data.", detail: "Collected stock prices through Alpha Vantage into JSON files, then analyzed the data with Python and Flask. Deployed to Google Cloud.", number: "03" },
];
const education = [["M.S.", "Artificial Intelligence", "Aug 2026 – present"], ["M.S.", "Software Engineering", "Jan 2019 – Dec 2020"], ["B.S.", "Electrical Engineering", "Aug 2015 – Dec 2018"]];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const filters = ["All", "React", "Python", "APIs"];
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter) || (filter === "APIs" && p.title !== "Stock Portfolio Suggestion Engine")), [filter]);

  return (
    <main className="site-shell">
      <nav className="nav container">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}><span>SG</span> Siling Guan</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a className="nav-contact" href="mailto:siling.guan@example.com">Let's connect <ArrowUpRight size={16} /></a>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Software engineer · San Jose, CA</p>
          <h1>Building useful software where <em>data meets people.</em></h1>
          <p className="hero-intro">I'm Siling Guan, an application developer and AI graduate student focused on thoughtful interfaces, reliable APIs, and products that make complex information easier to use.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="mailto:siling.guan@example.com">Get in touch <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-sidebar">
          <div className="hero-sidebar-item"><strong>2</strong><span>years building<br />healthcare software</span></div>
          <div className="hero-sidebar-item"><strong>3</strong><span>degrees across<br />engineering & AI</span></div>
          <div className="hero-sidebar-item"><strong>∞</strong><span>curiosity for the<br />next hard problem</span></div>
          <p className="hero-sidebar-note">Currently expanding my toolkit in <strong>artificial intelligence</strong> at SJSU.</p>
        </div>
      </section>

      <section className="section container" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Things I've built</h2></div>
          <div className="filter-row">{filters.map((item) => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}</div>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span>{project.number}</span><span className="project-type">{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-detail">{project.detail}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section container" id="about">
        <div>
          <div className="section-heading stacked">
            <p className="eyebrow">A little about me</p>
            <h2>Technical by nature.<br /><em>Human by design.</em></h2>
          </div>
        </div>
        <div className="about-copy">
          <p>My work sits at the intersection of software engineering and real-world impact. At Blue Shield of California, I supported Digital Health Record initiatives and developed applications integrated with Epic EHR systems.</p>
          <p>I enjoy moving between the details—SQL queries, API design, deployment pipelines—and the bigger question: how can technology make someone's day simpler?</p>
          <a className="text-link" href="mailto:siling.guan@example.com">Say hello <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">What I work with</p><h2>Tools of the trade</h2></div></div>
          <div className="skill-grid">
            {skillGroups.map(({ label, icon: Icon, items }) => (
              <div className="skill-group" key={label}>
                <Icon size={18} />
                <h3>{label}</h3>
                <div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="education">
        <div className="section-heading"><div><p className="eyebrow">The road so far</p><h2>Experience & education</h2></div></div>
        <div className="timeline">
          <div className="timeline-item" style={{ paddingTop: "28px" }}>
            <div className="timeline-date">Sep 2020 – Mar 2022</div>
            <div className="timeline-content">
              <p className="eyebrow">Blue Shield of California</p>
              <h3>Application Developer</h3>
              <ul>
                <li>Developed SQL queries and reports for application monitoring, data validation, and operational analysis across healthcare data sources.</li>
                <li>Built React dashboards and user interfaces for patient portals and internal users, improving usability and data accessibility.</li>
                <li>Developed secure Node.js RESTful APIs to enable data exchange between clinical and business systems.</li>
              </ul>
            </div>
          </div>
          {education.map(([degree, subject, date]) => (
            <div className="timeline-item" key={subject}>
              <div className="timeline-date">{date}</div>
              <div className="timeline-content">
                <p className="eyebrow">San Jose State University</p>
                <h3>{degree} <span>{subject}</span></h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="eyebrow">Have a good problem?</p>
            <h2>Let's make something<br /><em>meaningful.</em></h2>
          </div>
          <div className="footer-links">
            <a href="mailto:siling.guan@example.com"><Mail size={16} /> siling.guan@example.com</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Siling Guan</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </main>
  );
}
