
/* ============================================================
   EDIT ME — everything on the page is generated from this object.
   Replace the values below with your own info and the whole
   site updates: no need to touch the HTML or CSS above.
   ============================================================ */

const PROFILE = {
  name: "Alex Chen",
  role: "Full-Stack Developer · Backend-leaning",
  location: "Bengaluru, India",
  yearsExp: "5",
  focus: "distributed systems",
  availability: "open to remote roles",
  email: "alex.chen@example.com",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", url: "https://github.com/ravi-r45s" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Twitter/X", url: "https://x.com/" }
  ],
  bio: [
    "I build backend systems and APIs that stay boring in production — the highest compliment an engineer can receive. Most of my day is spent somewhere between a database schema and a load balancer config.",
    "Over the last <span class='highlight'>5 years</span> I've shipped everything from payment infrastructure to internal tooling used by 200+ engineers. I care about systems that are easy to delete as much as ones that are easy to build."
  ],
  facts: [
    { k: "role", v: "Full-Stack Developer" },
    { k: "based_in", v: "Bengaluru, IN" },
    { k: "experience", v: "5 years" },
    { k: "status", v: "open to remote roles" }
  ],
  skills: {
    languages: ["TypeScript", "Python", "Go", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    infra: ["Docker", "AWS", "Terraform", "GitHub Actions"]
  },
  projects: [
    {
      file: "ledger-api.go",
      name: "Ledger — Payments Engine",
      desc: "Double-entry ledger service handling idempotent transactions at ~2k req/s with full audit trails.",
      tags: ["Go", "PostgreSQL", "gRPC"],
      demo: "#", code: "#"
    },
    {
      file: "flowboard.tsx",
      name: "Flowboard",
      desc: "Realtime kanban board with CRDT-based collaborative editing and offline-first sync.",
      tags: ["TypeScript", "React", "WebSockets"],
      demo: "#", code: "#"
    },
    {
      file: "pixie.py",
      name: "Pixie — Image Pipeline",
      desc: "Serverless image processing pipeline: resize, watermark, and CDN-publish on upload.",
      tags: ["Python", "AWS Lambda", "S3"],
      demo: "#", code: "#"
    },
    {
      file: "querycraft.sql",
      name: "QueryCraft",
      desc: "Query plan visualizer that turns Postgres EXPLAIN output into an interactive flame graph.",
      tags: ["Rust", "WASM", "D3.js"],
      demo: "#", code: "#"
    }
  ],
  experience: [
    {
      hash: "a3f9c1e",
      role: "Senior Backend Engineer",
      org: "Nimbus Cloud",
      date: "2023 — Present",
      points: [
        "Led migration of monolith to service-oriented architecture, cutting deploy time from 40min to 4min.",
        "Designed the internal rate-limiting library now used across 30+ services."
      ]
    },
    {
      hash: "7bd21aa",
      role: "Backend Engineer",
      org: "Fintrack",
      date: "2021 — 2023",
      points: [
        "Built the core transaction ledger processing $50M+ monthly volume.",
        "Reduced P99 API latency by 65% through query optimization and caching."
      ]
    },
    {
      hash: "1c4e8f0",
      role: "Software Engineer",
      org: "Studio Loop",
      date: "2019 — 2021",
      points: [
        "Shipped a full-stack CMS used by 40+ client teams.",
        "Introduced CI/CD pipeline, cutting release cycles from weekly to daily."
      ]
    }
  ]
};

/* ---------------- rendering (no need to edit below) ---------------- */

function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

// hero name / role / actions
document.getElementById('heroName').innerHTML = PROFILE.name.split(' ')[0] + ' <span class="accent">' + PROFILE.name.split(' ').slice(1).join(' ') + '</span>';
document.getElementById('heroRole').textContent = PROFILE.role + '  ·  ' + PROFILE.location;
document.getElementById('heroActions').innerHTML = `
  <a class="btn primary" href="#projects">View projects →</a>
  <a class="btn" href="${PROFILE.resumeUrl}">Download résumé</a>
  <a class="btn" href="#contact">Get in touch</a>
`;

// terminal typewriter
const typeTarget = `${PROFILE.name.toLowerCase().replace(' ','_')} — ${PROFILE.role.split('·')[0].trim()}, ${PROFILE.focus}. ${PROFILE.availability}.`;
const typeLine = document.getElementById('typeLine');
let ti = 0;
function typeStep(){
  if(ti <= typeTarget.length){
    typeLine.innerHTML = typeTarget.slice(0, ti) + '<span class="cursor"></span>';
    ti++;
    setTimeout(typeStep, 18 + Math.random()*22);
  }
}
typeStep();

// about
document.getElementById('aboutText').innerHTML = PROFILE.bio.map(p => `<p>${p}</p>`).join('');
document.getElementById('factsCard').innerHTML = PROFILE.facts.map(f => `<div class="row"><span>${f.k}</span><b>${f.v}</b></div>`).join('');

// skills json card
function renderSkills(skills){
  const keys = Object.keys(skills);
  let html = `<div>{</div>`;
  keys.forEach((k, i) => {
    const items = skills[k].map(s => `<span class="s">"${s}"</span>`).join(`<span class="punc">, </span>`);
    const comma = i < keys.length - 1 ? '<span class="punc">,</span>' : '';
    html += `<div class="json-line"><span class="k">"${k}"</span><span class="punc">: [</span>${items}<span class="punc">]</span>${comma}</div>`;
  });
  html += `<div>}</div>`;
  return html;
}
document.getElementById('skillsCard').innerHTML = renderSkills(PROFILE.skills);

// projects
const dotColors = ['#5eead4','#f472b6','#fbbf24','#a78bfa'];
document.getElementById('projectsGrid').innerHTML = PROFILE.projects.map((p, i) => `
  <div class="proj-card">
    <div class="proj-tab"><span class="filedot" style="background:${dotColors[i % dotColors.length]}"></span>${p.file}</div>
    <div class="proj-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="proj-links">
        <a href="${p.demo}">↗ live demo</a>
        <a href="${p.code}">⌥ source</a>
      </div>
    </div>
  </div>
`).join('');

// experience / git log
document.getElementById('gitlog').innerHTML = PROFILE.experience.map(c => `
  <div class="commit">
    <div class="commit-head">
      <span class="commit-hash">${c.hash}</span>
      <span class="commit-role">${c.role}</span>
      <span class="commit-org">@ ${c.org}</span>
      <span class="commit-date">${c.date}</span>
    </div>
    <ul class="commit-body">${c.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
  </div>
`).join('');

// contact
document.getElementById('contactCmd').textContent = `mail --to ${PROFILE.name.split(' ')[0].toLowerCase()}`;
document.getElementById('emailText').textContent = PROFILE.email;
document.getElementById('socialRow').innerHTML = PROFILE.socials.map(s => `<a href="${s.url}">${s.label} ↗</a>`).join('');
document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(PROFILE.email).then(() => {
    const btn = document.getElementById('copyBtn');
    const prev = btn.textContent;
    btn.textContent = 'copied!';
    setTimeout(() => btn.textContent = prev, 1500);
  });
});

// status bar clock
function updateClock(){
  const now = new Date();
  document.getElementById('statusTime').textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) + ' local';
}
updateClock();
setInterval(updateClock, 30000);

// active tab highlighting on scroll
const tabs = document.querySelectorAll('.tab');
const sections = [...tabs].map(t => document.querySelector(t.getAttribute('href')));
function onScroll(){
  let idx = 0;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= 120) idx = i; });
  tabs.forEach((t, i) => t.classList.toggle('active', i === idx));
}
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();