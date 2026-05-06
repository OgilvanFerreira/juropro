import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const configPath = join(root, ".vercel", "output", "config.json");

const raw = await readFile(configPath, "utf8");
const config = JSON.parse(raw);

if (!Array.isArray(config.routes)) {
  config.routes = [];
}

config.routes = config.routes.filter(
  (route) => !(route.src === "/" && route.dest === "/landing.html"),
);

const filesystemIndex = config.routes.findIndex((route) => route.handle === "filesystem");
const insertAt = filesystemIndex === -1 ? 0 : filesystemIndex;

config.routes.splice(insertAt, 0, {
  src: "/",
  dest: "/landing.html",
});

await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
