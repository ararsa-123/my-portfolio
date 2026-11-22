import type { Metadata } from "next";
import { TrackPage } from "@/components/track-page";

export const metadata: Metadata = {
  title: "Public Health & Health Diplomacy",
  description: "A professional and research space for public health, tuberculosis services, health systems, diplomacy, and governance.",
};

export default function PublicHealthDiplomacyPage() {
  return (
    <TrackPage
      eyebrow="Professional practice · Research · Policy"
      title="Public Health & Health Diplomacy"
      description="A space for verified experience, research interests, field insights, health policy, international relations, and global health governance."
      audience="Health professionals · Researchers · Policy communities"
      status="Content under review"
      items={[
        "Tuberculosis and primary healthcare program insights",
        "Health systems and community health",
        "Health diplomacy and international cooperation",
        "Global health governance and policy analysis",
        "Research notes, publications, and policy briefs",
      ]}
    />
  );
}
