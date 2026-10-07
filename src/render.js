// Single source of truth for the page markup. Used by the React app and by scripts/static.mjs.
import * as d from "./data.js";

const e = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const L = d.links;
const btn = (href, text, v = "secondary") => !href ? "" :
  `<a class="btn btn-${v}" href="${e(href)}"${/^(mailto:|#)/.test(href) || href.endsWith(".pdf") ? "" : ' target="_blank" rel="noopener noreferrer"'}>${e(text)}</a>`;
const sec = (id, title, body, cls = "", nav = id) => `<section id="${id}" data-nav="${nav}" class="section ${cls}" aria-labelledby="${id}-h"><div class="wrap reveal"><h2 id="${id}-h">${e(title)}</h2>${body}</div></section>`;
const chips = (arr) => `<ul class="chips">${arr.map((c) => `<li>${e(c)}</li>`).join("")}</ul>`;

const capabilities = ["Document loading", "Section-based chunking", "Sentence Transformer embeddings", "FAISS vector search", "Configurable distance threshold", "Local LLM generation (Ollama)", "Context-restricted answers", "Source shown with each answer", "Unsupported-question handling", "LLM error fallback", "Logging", "Environment-based configuration", "Evaluation scripts and regression test"];
const nav = [["top", "Home"], ["about", "About"], ["project", "Projects"], ["experience", "Experience"], ["education", "Education"], ["skills", "Skills"], ["contact", "Contact"]];

const job = ([role, org, place, dates, bullets]) => `<article class="card job"><h3>${e(role)}</h3><p class="org">${e(org)}</p><p class="meta">${e(place)} · ${e(dates)}</p><ul>${bullets.map((b) => `<li>${e(b)}</li>`).join("")}</ul></article>`;
const flow = (title, steps, n) => `<div class="flow-group"><h4>${e(title)}</h4><ol class="flow c${n}">${steps.map(([nm, t]) => `<li><strong>${e(nm)}</strong><span>${e(t)}</span></li>`).join("")}</ol></div>`;

// Simplified four-colour Google Cloud mark drawn inline (no external request). For the official artwork, replace with the file from Google Cloud's brand resources.
const gcpLogo = (id) => `<svg class="gcp" viewBox="0 0 48 32" width="34" height="23" role="img" aria-label="Google Cloud logo" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${id}a"><rect x="0" y="0" width="24" height="16"/></clipPath><clipPath id="${id}b"><rect x="24" y="0" width="24" height="16"/></clipPath><clipPath id="${id}c"><rect x="0" y="16" width="24" height="16"/></clipPath><clipPath id="${id}d"><rect x="24" y="16" width="24" height="16"/></clipPath><path id="${id}p" d="M13 26A7 7 0 0 1 12.5 12A11 11 0 0 1 33.5 9.5A8.5 8.5 0 0 1 35 26Z" fill="none" stroke-width="4.2" stroke-linejoin="round"/></defs><use href="#${id}p" stroke="#EA4335" clip-path="url(#${id}a)"/><use href="#${id}p" stroke="#FBBC04" clip-path="url(#${id}b)"/><use href="#${id}p" stroke="#34A853" clip-path="url(#${id}c)"/><use href="#${id}p" stroke="#4285F4" clip-path="url(#${id}d)"/></svg>`;

const portrait = (photo) => `<div class="portrait"><div class="backdrop" aria-hidden="true"></div><div class="frame"><img src="${photo}" width="244" height="244" alt="Portrait of Muthupriya Shankaran"></div></div>`;

export function renderPage({ photo = "/photo.png" } = {}) {
  const header = `<header class="site-header"><div class="wrap header-in"><a href="#top" class="brand">Muthupriya Shankaran</a><nav aria-label="Main"><ul>${nav.map(([i, l]) => `<li><a href="#${i}">${l}</a></li>`).join("")}</ul></nav></div></header>`;

  const hero = `<section id="top" data-nav="top" class="hero" aria-labelledby="top-h"><div class="wrap hero-grid">
<div class="hero-text">
<h1 id="top-h">Muthupriya Shankaran</h1>
<p class="hero-title">AI Engineer</p>
<p class="hero-sub">Master's in Artificial Intelligence, Stockholm University</p>
<p class="hero-lede">An IT professional with a Master's in Artificial Intelligence, building practical AI applications with Python, LLMs, RAG and evaluation. Based in Stockholm, Sweden.</p>
<div class="btn-row hero-btns">${btn("#project", "View RAG Project", "primary")}${btn(L.github, "GitHub")}${btn(L.cv, "Download CV (PDF)")}</div>
</div>
${portrait(photo)}
</div></section>
<div class="wrap"><ul class="facts" aria-label="Profile at a glance">${d.facts.map(([k, v]) => `<li><strong>${e(k)}</strong><span>${e(v)}</span></li>`).join("")}</ul></div>`;

  const about = sec("about", "About", `<div class="prose"><p>I am an IT professional with more than five years of experience across software, data and API-driven systems, and a Master's in Artificial Intelligence from Stockholm University. My background includes Python, SQL, REST APIs, data processing, cloud data platforms and machine learning, with a focus on building solutions that are reliable and ready for real-world use.</p><p>I am currently pursuing a Master's in Interaction Design for Artificial Realities at Stockholm University, which complements my AI background with human-computer interaction and human-centered technology.</p><p>I am now focusing on building practical AI applications using Python, LLMs, retrieval-augmented generation (RAG), data processing and evaluation. My experience with data quality and system integration helps me design AI applications that are dependable and easy to evaluate.</p><p class="cred">${gcpLogo("gA")}<span>Google Cloud Professional Data Engineer</span></p></div>`, "calm");

  const demo = d.screenshot
    ? `<figure class="shot"><img src="${e(d.screenshot)}" alt="${e(d.screenshotAlt)}" loading="lazy"></figure>`
    : `<figure class="trace" aria-label="Example run of the RAG assistant"><figcaption>Example run on fictional NordicTech documents</figcaption>
<div class="trace-row"><span>Question</span><p>How many vacation days do employees get?</p></div>
<div class="trace-row src"><span>Retrieved</span><p>leave_policy.txt, Annual Vacation</p></div>
<div class="trace-row ans"><span>Answer</span><p>Employees are entitled to 25 paid vacation days per calendar year.</p></div></figure>`;

  const project = sec("project", "NordicTech RAG Assistant", `
<p class="feature-sub">Enterprise-style retrieval-augmented generation (RAG) assistant</p>
<div class="intro"><div>
<p class="lead">A document-based RAG assistant that answers questions from internal company documents and shows the source of each answer. It also handles unsupported questions and LLM failures safely. I built it to learn and demonstrate the engineering around an LLM application: retrieval design, grounding, evaluation and configuration.</p>
<div class="btn-row">${btn(L.ragRepo, "GitHub", "primary")}${btn(L.ragDemo, "Live Demo")}${btn(L.ragArchitecture, "Project architecture")}${btn(L.ragCaseStudy, "Case study")}</div>
<p class="note"><strong>About the data:</strong> NordicTech is a fictional sample company created for this project. I have not worked for NordicTech. The project is a local prototype with a command-line interface, not a production system.</p></div>
${demo}</div>
<h3>Technical stack</h3>${chips(d.stack)}
<h3>Architecture and data flow</h3>
${flow("Prepare the knowledge base", d.pipeline.slice(0, 5), 5)}${flow("Answer a question", d.pipeline.slice(5), 6)}
<h3>Evaluation and reliability</h3>
<dl class="results">${d.results.map(([k, v]) => `<div><dd>${e(v)}</dd><dt>${e(k)}</dt></div>`).join("")}</dl>
<p class="meta">Measured on the project's own small test sets (4 to 10 questions each) to check the pipeline behaves as designed. Not a production benchmark.</p>
<h3>What it includes</h3>${chips(capabilities)}
<h3>Design decisions</h3>
<div class="accordion">${d.caseStudy.map(([t, x], i) => `<details${i === 0 ? " open" : ""}><summary>${e(t)}</summary><p>${e(x)}</p></details>`).join("")}</div>`, "project-band");

  const other = sec("other", "Other projects and research", `<div class="grid">${d.projects.map((p) => `<article class="card"><h3>${e(p.title)}</h3><p class="meta">${e(p.stack)}</p><p>${e(p.text)}</p>${p.note ? `<p class="meta">${e(p.note)}</p>` : ""}${p.link ? `<div class="btn-row">${btn(L[p.link[0]], p.link[1])}${p.link2 ? btn(L[p.link2[0]], p.link2[1]) : ""}</div>` : ""}</article>`).join("")}</div>`, "calm", "project");

  const exp = sec("experience", "Professional experience", `<div class="grid">${d.experience.map(job).join("")}</div>`, "calm");

  const edu = sec("education", "Education", `<div class="grid two">${d.education.map(([t, s, x], i) => `<article class="card${i === 0 ? " current" : ""}"><h3>${e(t)}</h3>${i === 0 ? '<p><span class="badge">Currently pursuing</span></p>' : ""}<p class="meta">${e(s)}</p>${x ? `<p>${e(x)}</p>` : ""}</article>`).join("")}</div>`, "calm");

  const certs = sec("certifications", "Certifications", `<ul class="list">${d.certifications.map((c) => `<li><span>${e(c)}</span></li>`).join("")}</ul>`, "calm", "education");

  const langs = sec("languages", "Languages", `<ul class="list">${d.languages.map(([n, l]) => `<li><span><strong>${e(n)}</strong> <span class="lvl">· ${e(l)}</span></span></li>`).join("")}</ul>`, "calm", "education");

  const skills = sec("skills", "Technical skills", `<div class="grid">${d.skills.map(([k, v]) => `<div class="card skill"><h3>${e(k)}</h3>${chips(v.split(", "))}</div>`).join("")}</div>`, "calm");

  const contact = sec("contact", "Let's talk about AI engineering roles", `<p class="lead">Open to AI Engineer and related roles in Sweden and Europe.</p>${L.email ? `<p><a class="mail" href="mailto:${e(L.email)}">${e(L.email)}</a></p>` : ""}<div class="btn-row">${btn(L.linkedin, "LinkedIn", "primary")}${btn(L.github, "GitHub")}${btn(L.cv, "Download CV (PDF)")}</div>`, "contact");

  return `<a class="skip" href="#project">Skip to the RAG project</a>${header}<main>${hero}${about}${project}${other}${exp}${edu}${certs}${langs}${skills}${contact}</main><footer class="foot"><div class="wrap"><p>Muthupriya Shankaran · Stockholm, Sweden</p></div></footer>`;
}
