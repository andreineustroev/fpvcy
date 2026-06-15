import { defineConfig, type HeadConfig } from "vitepress";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// import fs from "node:fs";
// import path from "node:path";
// import { execSync } from "node:child_process";
// import { createContentLoader, type SiteConfig } from "vitepress";
// import { Feed } from "feed";

export const shared = defineConfig({
  rewrites: { "en/:rest*": ":rest*" },
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

})
