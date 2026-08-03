import { load as parseYaml } from "js-yaml";
import siteData from "../../content/site.json";

// gray-matter pulls in Node's Buffer, which isn't polyfilled in the browser
// bundle — the frontmatter format here is simple enough to split by hand.
function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
  return { data, content: match[2] };
}

export type GalleryItem = {
  src: string;
  poster?: string;
  alt: string;
  size: "large" | "small";
};

export type Badge = "Shipped" | "Pre-launch" | "Concept" | "In progress";

export type Project = {
  slug: string;
  category: string;
  platform: string;
  navLabel: string;
  year: string;
  title: string;
  description: string;
  badge: Badge;
  client: string;
  featured: boolean;
  order: number;
  cover: string;
  gallery: GalleryItem[];
  roleTitle: string;
  timeline: string;
  keyChallenges: string[];
  outcomes: string[];
  tags: string[];
  body: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  subtitle?: string;
  type: string;
  order: number;
  body: string;
};

const projectFiles = import.meta.glob("../../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const pageFiles = import.meta.glob("../../content/pages/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseProjects(): Project[] {
  const parsed = Object.values(projectFiles).map((raw) => {
    const { data, content } = parseFrontmatter(raw);
    return { ...(data as Omit<Project, "body">), body: content.trim() };
  });
  const workOrder = siteData.workOrder;
  return parsed.sort(
    (a, b) => workOrder.indexOf(a.slug) - workOrder.indexOf(b.slug),
  );
}

function parsePages(): ContentPage[] {
  const parsed = Object.values(pageFiles).map((raw) => {
    const { data, content } = parseFrontmatter(raw);
    return { ...(data as Omit<ContentPage, "body">), body: content.trim() };
  });
  return parsed.sort((a, b) => a.order - b.order);
}

export const projects = parseProjects();
export const pages = parsePages();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPageBySlug(slug: string): ContentPage | undefined {
  return pages.find((p) => p.slug === slug);
}

export const site = siteData;
