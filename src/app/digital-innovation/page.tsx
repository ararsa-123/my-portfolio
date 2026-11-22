import type { Metadata } from "next";
import { TrackPage } from "@/components/track-page";

export const metadata: Metadata = {
  title: "Digital Innovation & Software",
  description: "Digital health concepts, software projects, workflow design, and technical case studies.",
};

export default function DigitalInnovationPage() {
  return (
    <TrackPage
      eyebrow="Software · Digital health · Systems"
      title="Digital Innovation & Software"
      description="A portfolio of ideas and applications at the intersection of technology, healthcare workflows, and practical problem-solving."
      audience="Developers · Health systems · Potential collaborators"
      status="Case studies to be verified"
      items={[
        "Digital health application case studies",
        "Workflow and information architecture",
        "Offline-capable and interoperability concepts",
        "Technology stack and design decisions",
        "Demo and repository links after access review",
      ]}
    />
  );
}
