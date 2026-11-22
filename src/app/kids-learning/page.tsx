import type { Metadata } from "next";
import { TrackPage } from "@/components/track-page";

export const metadata: Metadata = {
  title: "Islamic Children's Learning Studio",
  description: "A separate, privacy-conscious learning space for age-appropriate Islamic stories, duas, character, Arabic, and educational media.",
};

export default function KidsLearningPage() {
  return (
    <TrackPage
      tone="children"
      eyebrow="A separate learning identity · Parent-aware"
      title="A gentle studio for curious young Muslims."
      description="A dedicated children's learning area for age-aware Islamic storytelling, daily duas, good character, beginner Arabic, and curiosity about the natural world."
      audience="Children · Parents · Educators"
      status="Curriculum and visual identity in development"
      items={[
        "Age bands: 3–5, 6–8, and 9–12 years",
        "Quran stories and Islamic history using verified sources",
        "Daily duas: Arabic, transliteration, translation, and meaning",
        "Manners, compassion, honesty, and practical character",
        "Arabic basics and learning through nature",
        "Storyboards, narration, animation, and parent-facing notes",
      ]}
    />
  );
}
