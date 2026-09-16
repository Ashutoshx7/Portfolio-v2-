export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imageFit?: "cover" | "contain";
  cardWidth?: number;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "gsoc-2026-certificate",
    title: "Completed Google Summer of Code 2026 with Sugar Labs",
    badge: "GSoC 2026",
    image: "/highlights/gsoc-2026-certificate.png",
    imageFit: "contain",
    cardWidth: 255,
  },
  {
    id: "sentry-sponsored-account",
    title: "VengenceUI accepted into Sentry's Sponsored Account Program",
    badge: "Sentry",
    image: "/highlights/sentry-sponsored-account.png",
    imageFit: "cover",
    cardWidth: 200,
  },
  {
    id: "claude-open-source",
    title: "Accepted into the Claude for Open Source Program",
    badge: "Claude OSS",
    image: "/highlights/claude-open-source.png",
    imageFit: "contain",
    cardWidth: 208,
  },
  {
    id: "caracal-lfx-mentee",
    title: "Selected as a Caracal Mentee for LFX Mentorship 2026",
    badge: "LFX 2026",
    image: "/highlights/caracal-lfx-mentee.png",
    imageFit: "contain",
    cardWidth: 200,
  },
  {
    id: "sarvam-startup-program",
    title: "VengenceUI accepted into the Sarvam Startup Program",
    badge: "Sarvam AI",
    image: "/highlights/sarvam-startup-program.png",
    imageFit: "contain",
    cardWidth: 334,
  },
  {
    id: "gsoc-2025",
    title: "Selected for Google Summer of Code 2025",
    badge: "GSoC 2025",
    image: "/highlights/gsoc-selection.png",
  },
  {
    id: "vercel-oss",
    title: "Accepted into Vercel Open Source Program",
    badge: "Vercel OSS",
    image: "/highlights/vercel-oss.png",
  },
  {
    id: "lf-mentorship",
    title: "Accepted into Linux Foundation Mentorship Program",
    badge: "LFX Mentorship",
    image: "/highlights/lf-mentorship.png",
  },
  {
    id: "podcast-harkirat",
    title: "Featured on Harkirat Singh's Podcast",
    badge: "Podcast",
    image: "/highlights/podcast-harkirat.png",
    imageFit: "contain",
    link: "https://youtu.be/H89K4exMrOY?si=su6FrrZmw9a8EEnv&t=55",
  },
];
