#!/usr/bin/env node
import { mkdirSync, rmSync, copyFileSync, readdirSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcDir = join(root, "src");
const pagesDir = join(srcDir, "pages");
const assetsDir = join(srcDir, "assets");
const distDir = join(root, "dist");

function copyRecursive(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });
  mkdirSync(dest, { recursive: true });
  for (const entry of entries) {
    const from = join(src, entry.name);
    const to = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(from, to);
    } else {
      copyFileSync(from, to);
    }
  }
}

function main() {
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });
  copyRecursive(assetsDir, join(distDir, "assets"));
  const pages = readdirSync(pagesDir);
  for (const file of pages) {
    const source = join(pagesDir, file);
    if (statSync(source).isFile()) {
      const target = join(distDir, file);
      copyFileSync(source, target);
    }
  }
  console.log("✓ Built static site to dist/");
}

main();
