import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA",
};

export const projectsData: Project[] = [
  {
    slug: "vengenceui",
    title: "VengenceUI",
    imageTitle: "Landing Page",
    src: "/project-image/image copy.png",
    lightModeSrc: "/project-image/image.png",
    video: "https://www.youtube.com/embed/Z-5Y1JQlrdw?si=hA_aQJ3Syv-_jzo0",
    description: "VengenceUI helps you to build your landing page by providing you animated beautiful components",
    tech: ["next", "react", "ts", "tailwind", "motion"],
    github: "https://github.com/Ashutoshx7/VengeanceUI",
    live: "https://www.vengenceui.com/",
    starsText: "500+",
    backgroundImage: "/project-hover-vengenceui.webp",
    hasPin: true,
  },
  {
    slug: "scribble3d",
    title: "Scribble3D",
    imageTitle: "App Interface",
    src: "/Screenshot%202026-02-07%20234301.png",
    lightModeSrc: "/Screenshot%202026-02-07%20234011.png",
    video: "https://www.youtube.com/embed/vEW0auc6fXI?si=SEShsAG_h-e9kdnP",
    description: "Turn your sketches into 3D objects and worlds — no 3D skills required.",
    tech: ["next", "tldraw", "three", "ts", "fastapi", "gemini"],
    github: "https://github.com/Ashutoshx7/Scribble3D-Sketch-to-3rd-",
    live: "",
    backgroundImage: "/project-hover-scribble3d.webp",
    hasPin: false,
  },
  {
    slug: "blueprint",
    title: "Blueprint",
    imageTitle: "Canvas Interface",
    src: "/Screenshot%202026-02-07%20233440.png",
    lightModeSrc: "/Screenshot%202026-02-07%20233831.png",
    video: "",
    description: "Blueprint is an AI UI builder that turns prompts into structured, production-ready interfaces.",
    tech: ["next", "ts", "tailwind", "prisma", "bun", "node", "langchain", "rag"],
    github: "https://github.com/Ashutoshx7/Blueprint",
    live: "",
    backgroundImage: "/project-hover-blueprint.webp",
    hasPin: false,
  },
  {
    slug: "inquiro",
    title: "Inquiro",
    imageTitle: "Search UI",
    src: "/Screenshot 2026-02-07 011550.png",
    lightModeSrc: "/Screenshot 2026-02-07 012511.png",
    video: "/inquiro.mp4",
    description: "Inquiro is an AI-powered search engine that helps you find information on the internet",
    tech: ["next", "ts", "radixui", "node", "gemini", "langchain", "langgraph"],
    github: "https://github.com/Ashutoshx7/Inquiro-",
    live: "",
    backgroundImage: "/project-hover-inquiro.webp",
    hasPin: false,
  },
];
