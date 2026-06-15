import { defineConfig, type HeadConfig } from "vitepress";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { createContentLoader, type SiteConfig } from "vitepress";
// import { Feed } from "feed";

export const shared = defineConfig({
  rewrites: { "en/:rest*": ":rest*" },
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  transformPageData(pageData) {
    // 2. Simple Authors from Git
    if (pageData.filePath) {
      //try {
        const fullPath = path.resolve(process.cwd(), "docs", pageData.filePath);
        const history = execSync(`git log --follow --format="%an|%ae" -- "${fullPath}"`, { encoding: "utf-8" })
          .split("\n")
          .map((l: string) => l.trim())
          .filter(Boolean);
        const emailsUsed = new Set<string>();
        const namesUsed = new Set<string>();
        const authors: string[] = [];
        for (const line of history) {
          const [name, email] = line.split("|");
          if (!name || !email || email.includes("[bot]") || emailsUsed.has(email)) continue;
          emailsUsed.add(email);
          if (!namesUsed.has(name)) {
            namesUsed.add(name);
            authors.push(name);
          }
        }
        if (authors.length > 0) {
          pageData.frontmatter.gitAuthors = authors;
        // }
      // } catch {
      //   // ignore errors during author extraction
      }
    }

  }
})

function excerpt(content: string) {
  if (!content) return "";
  const stripped = content
    .replace(/^---[\s\S]*?---\n*/, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/#+ .*/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/<.*?>/g, "")
    .replace(/`{1,3}.*?`{1,3}/gs, "")
    .replace(/&[a-z0-9#]+;/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.length > 160 ? stripped.slice(0, 157) + "..." : stripped;
}
