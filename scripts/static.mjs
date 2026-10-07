// Builds one double-clickable file: node scripts/static.mjs -> portfolio-standalone.html
import fs from "node:fs";
import { renderPage } from "../src/render.js";
import { initEffects } from "../src/effects.js";
const photo = "data:image/png;base64," + fs.readFileSync("public/photo.png").toString("base64");
const css = fs.readFileSync("src/styles.css", "utf8");
const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Muthupriya Shankaran | AI Engineer | Master's in Artificial Intelligence</title>
<meta name="description" content="Portfolio of Muthupriya Shankaran, an IT professional with a Master's in Artificial Intelligence building practical LLM and RAG applications in Python. Based in Stockholm, Sweden.">
<meta property="og:type" content="website"><meta property="og:title" content="Muthupriya Shankaran | AI Engineer"><meta property="og:description" content="Practical AI applications: Python, LLMs, RAG, evaluation. Master's in Artificial Intelligence, Stockholm.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap"><style>${css}</style></head><body>${renderPage({ photo })}<script>(${initEffects.toString()})();</script></body></html>`;
fs.writeFileSync("portfolio-standalone.html", html);
console.log("written", html.length, "bytes");
