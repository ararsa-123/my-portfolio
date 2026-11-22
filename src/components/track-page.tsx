import Link from "next/link";

type TrackPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  status: string;
  items: string[];
  tone?: "professional" | "reflective" | "children";
};

export function TrackPage({
  eyebrow,
  title,
  description,
  audience,
  status,
  items,
  tone = "professional",
}: TrackPageProps) {
  return (
    <main id="main-content" className={`track-page track-page-${tone}`}>
      <section className="track-hero">
        <div className="container-wide track-hero-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="track-description">{description}</p>
          <div className="track-meta">
            <span>{audience}</span>
            <span className="status-pill">{status}</span>
          </div>
        </div>
      </section>

      <section className="container-wide track-content">
        <div className="track-content-heading">
          <div>
            <p className="eyebrow">Planned content</p>
            <h2>What belongs here</h2>
          </div>
          <p>
            This section is being built. Content will be added only after relevant details,
            sources, and publication permissions have been checked.
          </p>
        </div>

        <div className="track-list">
          {items.map((item, index) => (
            <div className="track-list-item" key={item}>
              <span className="track-list-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="track-note">
          <strong>Editorial standard</strong>
          <p>
            No credentials, research findings, project metrics, endorsements, links, or media
            are published here until verified. TODO placeholders will be replaced during review.
          </p>
        </div>

        <Link href="/" className="back-link">← Return to homepage</Link>
      </section>
    </main>
  );
}
