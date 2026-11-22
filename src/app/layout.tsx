import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  description: profile.description,
  jobTitle: [
    "Public Health Clinician",
    "Health Diplomacy Scholar",
    "Digital Health Developer",
    "Islamic Content Creator",
  ],
  ...(siteUrl ? { url: siteUrl } : {}),
};

export const metadata: Metadata = {
  title: {
    default: "Mekbul Kelifa | Health, Diplomacy, Digital Innovation & Knowledge",
    template: "%s | Mekbul Kelifa",
  },
  description:
    "A growing platform connecting public health practice, health diplomacy, digital innovation, Islamic reflections, and educational media.",
  keywords: [
    "public health",
    "health diplomacy",
    "tuberculosis",
    "digital health",
    "global health governance",
    "Islamic reflections",
    "Islamic children's learning",
  ],
  openGraph: {
    type: "website",
    title: "Mekbul Kelifa — Service, Knowledge, Innovation",
    description:
      "Public health, health diplomacy, digital innovation, Islamic reflections, and educational media.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
