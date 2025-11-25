import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Production Baton Rouge | Professional Podcast Services",
  description: "Professional podcast production services in Baton Rouge. Expert podcast editing, recording, and publishing. Get your podcast produced by experienced podcast producers near you.",
  keywords: [
    "podcast production Baton Rouge",
    "podcast editing Baton Rouge",
    "podcast studio Baton Rouge",
    "podcast producer Baton Rouge",
    "podcast agency Baton Rouge",
    "batch podcast recording Baton Rouge",
    "podcast production near me",
  ],
};

export default function PodcastProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



