
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ImageIcon,
} from "lucide-react";

import {
  site,
  links,
  nav,
  about,
  skills,
  projects,
  research,
  professional,
  leadership,
  gallery,
  education,
} from "./data/content";

import {
  T,
  Reveal,
  Section,
  LinkButton,
  Card,
  Status,
  Tags,
  ext,
} from "./components/ui";

// Social links use the URLs exactly as defined in content.js.
// In particular, links.email already contains the "mailto:" prefix.
const socials = [
  ["GitHub", links.github, Github],
  ["LinkedIn", links.linkedin, Linkedin],
  ["Email", links.email, Mail],
];

const Socials = () => (
  <ul className="socials">
    {socials.map(([label, href, Icon]) => (
      <li key={label}>
        {href ? (
          <a
            href={href}
            aria-label={label}
            {...ext(href)}
          >
            <Icon size={18} />
          </a>
        ) : (
          <span
            className="disabled"
            role="img"
            aria-label={`${label} (link not added yet)`}
            title="Add in src/data/content.js"
          >
            <Icon size={18} />
          </span>
        )}
      </li>
    ))}
  </ul>
);

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          {site.brand}
        </a>

        <nav className={open ? "open" : ""} aria-label="Primary">
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="btn primary small"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

const Hero = () => (
  <section id="top" className="hero">
    <div className="wrap hero-in">
      <Reveal className="hero-text">
        <p className="eyebrow">Hi, I'm</p>

        <h1>
          <T v={site.name} />
        </h1>

        <p className="role">{site.role}</p>

        <p className="lead">{site.intro}</p>

        <div className="actions">
          <a className="btn primary" href="#projects">
            View my work
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <LinkButton
            href={links.resume}
            variant="secondary"
            icon={Download}
          >
            Download résumé
          </LinkButton>
        </div>

        <Socials />
      </Reveal>

      <Reveal className="hero-art" delay={0.1}>
        <div className="disc" aria-hidden="true" />

        {site.photo ? (
          <img src={site.photo} alt={site.photoAlt} />
        ) : (
          <div className="portrait-ph">
            <ImageIcon size={28} aria-hidden="true" />
            <span className="ph">[Add portrait: public/portrait.jpg]</span>
          </div>
        )}
      </Reveal>
    </div>
  </section>
);

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="My journey"
    tint
  >
    <div className="two">
      <Reveal>
        <p className="lead">{about.text}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <h3 className="mini">Skills & tools</h3>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <Tags items={group.items} />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </Section>
);

const Timeline = ({ items }) => (
  <ol className="timeline">
    {items.map((item, index) => (
      <li key={index}>
        <Reveal delay={index * 0.06}>
          {item.status && <Status {...item.status} />}

          <h3>
            <T v={item.title} />
          </h3>

          {item.meta && (
            <p className="meta">
              <T v={item.meta} />
            </p>
          )}

          {item.text && (
            <p className="body">
              <T v={item.text} />
            </p>
          )}
        </Reveal>
      </li>
    ))}
  </ol>
);

const Gallery = () => (
  <Section
    id="design"
    eyebrow="Selected visuals"
    title="Design, web and technical visuals"
    intro="A selection of supplied event designs and website / technical visuals."
  >
    <div className="gallery">
      {gallery.map((item, index) => (
        <Reveal key={index} delay={index * 0.06}>
          <figure className="tile">
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
              />
            ) : (
              <div className="tile-ph">
                <ImageIcon size={24} aria-hidden="true" />
                <span className="ph">
                  [Add {item.label.toLowerCase()}]
                </span>
              </div>
            )}
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Résumé & contact"
    title="Let's connect"
    intro="Open to internships, technical roles and research collaborations."
    tint
  >
    <Reveal className="contact">
      <LinkButton
        href={links.resume}
        icon={Download}
      >
        Download résumé
      </LinkButton>

      <ul className="contact-list">
        {socials.map(([label, href, Icon]) => (
          <li key={label}>
            <Icon size={18} aria-hidden="true" />

            {href ? (
              <a
                className="textlink"
                href={href}
                {...ext(href)}
              >
                {label === "Email"
                  ? "durgeshrajpurohit685@gmail.com"
                  : label}
              </a>
            ) : (
              <span className="disabled">
                {label} <span className="ph">[Add link]</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />

        <About />

        <Section
          id="projects"
          eyebrow="Featured projects"
          title="Building useful things"
          intro="A selection of project work across AI, geospatial intelligence and frontend development."
        >
          <div className="grid2 project-grid">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                index={index}
                {...project}
                linkLabel="View project"
              />
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Research & exploration"
          title="Questions worth exploring"
          tint
          intro="Research directions and exploratory work. Items are described according to their current known scope; no publication details are assumed."
        >
          <div className="grid2">
            {research.map((item, index) => (
              <Card
                key={item.title}
                index={index}
                {...item}
              />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience & leadership"
          title="Turning ideas into solutions"
        >
          <h3 className="mini">Professional & freelance</h3>

          <div className="grid2">
            {professional.map((item, index) => (
              <Card
                key={item.title}
                index={index}
                {...item}
                href={
                  item.href === "fiverr"
                    ? links.fiverr
                    : item.href
                }
                linkLabel={
                  item.href === "fiverr"
                    ? "View Fiverr profile"
                    : "View details"
                }
              />
            ))}
          </div>

          <h3 className="mini gap">
            Leadership & college activities
          </h3>

          <Timeline items={leadership} />
        </Section>

        <Gallery />

        <Section
          id="education"
          eyebrow="Education"
          title="Where I study"
          tint
        >
          <Timeline items={education} />
        </Section>

        <Contact />
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <p>
            © {new Date().getFullYear()} {site.brand} · GGSIPU, Delhi · IIT Madras
          </p>

          <nav aria-label="Footer">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <Socials />
        </div>
      </footer>
    </>
  );
}
