import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ext = (h) => (h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

// Renders strings as-is and placeholder objects as an editable dashed marker.
export const T = ({ v }) =>
  v && typeof v === "object" && "ph" in v
    ? <span className="ph" title="Placeholder: edit in src/data/content.js">[{v.ph}]</span>
    : v;

export function Reveal({ children, className, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}>{children}</motion.div>
  );
}

export const Section = ({ id, eyebrow, title, intro, tint, children }) => (
  <section id={id} className={"section" + (tint ? " tint" : "")} aria-labelledby={id + "-h"}>
    <div className="wrap">
      <Reveal className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id + "-h"}>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export function LinkButton({ href, variant = "primary", icon: Icon, children }) {
  const cls = `btn ${variant}`;
  const inner = <>{children}{Icon && <Icon size={16} aria-hidden="true" />}</>;
  return href
    ? <a className={cls} href={href} {...ext(href)}>{inner}</a>
    : <span className={cls + " disabled"} aria-disabled="true" title="Add this link in src/data/content.js">{inner}</span>;
}

export const Status = ({ kind, label }) => <span className={"status " + kind}><i aria-hidden="true" />{label}</span>;

export const Tags = ({ items }) =>
  items.length
    ? <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
    : <p className="tags-empty"><span className="ph">[Add confirmed technologies]</span></p>;

export function Card({ title, meta, text, status, tags, href, image, imageAlt = "", linkLabel = "View details", index = 0 }) {
  return (
    <Reveal delay={index * 0.06} className="card-wrap">
      <motion.article className={"card" + (image ? " card-with-image" : "")} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        {image && <img className="card-image" src={image} alt={imageAlt || String(title || "Project image")} loading="lazy" />}
        {status && <Status {...status} />}
        <h3><T v={title} /></h3>
        {meta && <p className="meta"><T v={meta} /></p>}
        {text && <p className="body"><T v={text} /></p>}
        {tags && <Tags items={tags} />}
        {href !== undefined && (
          <div className="card-foot">
            {href ? <a className="textlink" href={href} {...ext(href)}>{linkLabel} <ArrowUpRight size={14} aria-hidden="true" /></a>
                  : <span className="textlink disabled">External link not added yet</span>}
          </div>
        )}
      </motion.article>
    </Reveal>
  );
}
