import Link from "next/link";
import type { Division } from "@/data/divisions";

type DivisionCardProps = {
  division: Division;
};

export function DivisionCard({ division }: DivisionCardProps) {
  return (
    <article className={`division-card division-card-${division.tone}`}>
      <div className="division-card-top">
        <span className="division-number">{division.number}</span>
        <span className="division-audience">{division.audience}</span>
      </div>
      <h3>{division.title}</h3>
      <p>{division.description}</p>
      <Link className="card-link" href={division.href}>
        Explore this area <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
