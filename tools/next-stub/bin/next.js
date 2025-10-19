#!/usr/bin/env node
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..", "..", "..");
const command = process.argv[2] ?? "build";

if (command === "build") {
  const buildScript = join(projectRoot, "scripts", "build.js");
  const result = spawnSync(process.execPath, [buildScript], { stdio: "inherit" });
  process.exit(result.status ?? 0);
}

if (command === "dev" || command === "start") {
  console.log("This stub Next CLI runs the static build. Use a local server to preview dist/.");
  process.exit(0);
}

if (command === "lint") {
  console.log("Lint command is not implemented in the stub CLI.");
  process.exit(0);
}

console.error(`Unknown command: ${command}`);
process.exit(1);
