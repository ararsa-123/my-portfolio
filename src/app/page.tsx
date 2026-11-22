import Link from "next/link";
import { DivisionCard } from "@/components/division-card";
import { divisions } from "@/data/divisions";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container-wide hero-grid">
          <div>
            <p className="eyebrow">Public health · Diplomacy · Systems · Knowledge</p>
            <h1>
              A life of service, research, and <span>purposeful innovation.</span>
            </h1>
            <p className="hero-copy">{profile.positioning} This site brings together professional work, ongoing learning, and educational media in one carefully organized place.
            </p>
            <div className="hero-actions">
              <Link href="#divisions" className="button button-primary">Explore the platform</Link>
              <Link href="/about" className="button button-secondary">About this work</Link>
            </div>
          </div>

          <aside className="hero-aside" aria-label="The platform's connected areas">
            <p className="aside-label">A connected practice</p>
            <div className="connection-list">
              <div className="connection-row">
                <span className="connection-index">01</span>
                <div><strong>Care & public health</strong><span>Frontline experience and health systems</span></div>
              </div>
              <div className="connection-row">
                <span className="connection-index">02</span>
                <div><strong>Policy & diplomacy</strong><span>Research, governance, and cooperation</span></div>
              </div>
              <div className="connection-row">
                <span className="connection-index">03</span>
                <div><strong>Digital tools</strong><span>Practical systems and responsible technology</span></div>
              </div>
              <div className="connection-row">
                <span className="connection-index">04</span>
                <div><strong>Meaning & learning</strong><span>Reflection and educational storytelling</span></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="divisions" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore by interest</p>
              <h2>Four areas. One connected purpose.</h2>
            </div>
            <p>
              Each area has its own audience and editorial standards. The children’s studio
              will remain separate from adult reflections and professional content.
            </p>
          </div>
          <div className="division-grid">
            {divisions.map((division) => (
              <DivisionCard key={division.href} division={division} />
            ))}
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container-wide">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Guiding principles</p>
              <h2>Build with care. Publish with integrity.</h2>
            </div>
            <p>
              The platform is designed to value accuracy, useful work, privacy, and clear
              separation between professional evidence and personal reflection.
            </p>
          </div>
          <div className="principles-grid">
            <article className="principle">
              <h3>Evidence before claims</h3>
              <p>Credentials, research, project details, sources, and results are verified before they are presented as facts.</p>
            </article>
            <article className="principle">
              <h3>Privacy by design</h3>
              <p>Health-related work is described without patient information or confidential workplace data.</p>
            </article>
            <article className="principle">
              <h3>Knowledge with purpose</h3>
              <p>Professional work, reflective learning, and children’s education each receive the context and care they require.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="building-section">
        <div className="container-wide building-panel">
          <div>
            <p className="eyebrow">First release</p>
            <h2>More work is being curated.</h2>
            <p>
              Research records, project case studies, videos, public links, and contact
              information will be added after verification. This first release establishes
              the architecture and visual direction.
            </p>
          </div>
          <Link href="/about" className="button button-secondary">Read the project note</Link>
        </div>
      </section>
    </main>
  );
}
