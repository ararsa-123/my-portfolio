import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <div className="container-wide">
        <p className="eyebrow">About the platform</p>
        <h1>Different disciplines, connected by service and learning.</h1>
        <p className="about-copy">{profile.biography}</p>
        <div className="about-checklist">
          <div>
            <strong>Professional profile</strong>
            <p>TODO: verify public biography, exact credential wording, dates, employers, and approved CV before publishing.</p>
          </div>
          <div>
            <strong>Research & publications</strong>
            <p>TODO: add verified titles, publication status, abstracts, citations, and downloadable files where permitted.</p>
          </div>
          <div>
            <strong>Projects & demonstrations</strong>
            <p>TODO: confirm project ownership, status, repository visibility, demo links, and any confidentiality restrictions.</p>
          </div>
          <div>
            <strong>Contact & collaboration</strong>
            <p>TODO: add a public email and verified social links. A contact form will be implemented after choosing a privacy-conscious provider.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
