import type { Metadata } from "next";
import { TrackPage } from "@/components/track-page";

export const metadata: Metadata = {
  title: "Islamic Reflections",
  description: "Adult reflections on Quranic contemplation, spirituality, ethics, knowledge, and purposeful living.",
};

export default function ReflectionsPage() {
  return (
    <TrackPage
      tone="reflective"
      eyebrow="Adult learning · Spirituality · Ethics"
      title="Islamic Reflections"
      description="A reflective space for Quranic contemplation, spiritual growth, ethics, knowledge, and everyday life—with clear distinctions between sourced material and personal commentary."
      audience="Adult readers · Learners · Reflective viewers"
      status="Sources and drafts to be reviewed"
      items={[
        "Quranic reflections with verified verse references",
        "Hadith-based reminders with source and authenticity checks",
        "Tazkiyah, intention, patience, gratitude, and ihsan",
        "Ethics, service, relationships, and contemporary questions",
        "Video scripts and written reflections",
      ]}
    />
  );
}
