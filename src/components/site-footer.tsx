import Link from "next/link";
import { divisions } from "@/data/divisions";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-top">
        <div>
          <p className="footer-brand">{profile.name}</p>
          <p className="footer-note">
            A growing platform for service, research, systems, and meaningful learning.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {divisions.map((division) => (
            <Link key={division.href} href={division.href}>{division.shortTitle}</Link>
          ))}
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>TODO: add verified contact and social links</span>
      </div>
    </footer>
  );
}
