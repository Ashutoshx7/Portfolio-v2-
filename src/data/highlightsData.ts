export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  link?: string;
};

export const highlightsData: Highlight[] = [
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
    link: "https://youtu.be/H89K4exMrOY?si=su6FrrZmw9a8EEnv&t=55",
  },
];
