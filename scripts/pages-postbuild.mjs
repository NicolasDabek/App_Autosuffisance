/**
 * Après `vite build` en mode GitHub Pages : publie la coquille SPA comme
 * index.html, 404.html (repli pour toute URL inconnue) et une copie par route
 * connue, pour que chaque lien direct réponde 200 sans serveur.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "dist/client";
const shell = join(out, "_shell.html");
if (!existsSync(shell)) throw new Error("dist/client/_shell.html manquant : lancer le build avec PAGES_BASE");

const tree = readFileSync("src/routeTree.gen.ts", "utf8");
const statics = [...new Set([...tree.matchAll(/fullPath: '([^']*)'/g)].map((m) => m[1]))].filter((p) => !p.includes("$"));

function ids(file) {
  return [...readFileSync(file, "utf8").matchAll(/^ {4}id: "([^"]+)"/gm)].map((m) => m[1]);
}
const dynamic = [
  ...ids("src/data/animals.ts").map((id) => `/elevage/${id}`),
  ...ids("src/data/diy.ts").map((id) => `/bricolage/${id}`),
  ...ids("src/data/forage.ts").map((id) => `/cueillette/${id}`),
];

copyFileSync(shell, join(out, "index.html"));
copyFileSync(shell, join(out, "404.html"));
let n = 0;
for (const p of [...statics, ...dynamic]) {
  const clean = p.replace(/^\/|\/$/g, "");
  if (!clean) continue;
  const dir = join(out, clean);
  mkdirSync(dir, { recursive: true });
  copyFileSync(shell, join(dir, "index.html"));
  n++;
}
writeFileSync(join(out, ".nojekyll"), "");
console.log(`[pages] index.html, 404.html et ${n} routes publiées`);
