/* ============================================================
   Shared chrome: header, footer, FR/EN switch.
   Language choice lives in memory only (no storage), so every
   page opens in English and the toggle re-renders in place.
   ============================================================ */
let lang = "en";
const $ = id => document.getElementById(id);
const t = v => (v && typeof v === "object" && "fr" in v) ? v[lang] : v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const FICON = {
  github: '<svg class="fi" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.83 1.2 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
  linkedin: '<svg class="fi" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>'
};

/* -----------------------------------------------------------------
   Rich project body — an array of blocks, grouped into .content-block
   sections under each "h2". Block types:
     { type:"h2",  text:{fr,en} }          section heading
     { type:"h3",  text:{fr,en} }          sub-heading
     { type:"p",   text:{fr,en} }          paragraph
     { type:"ul",  items:[{fr,en}, ...] }  bullet list
     { type:"img", src, alt:{fr,en}, caption:{fr,en} }        one figure
     { type:"gallery", items:[{src, caption:{fr,en}}, ...] }  row of figures
     { type:"code", text, lang }           code block
     { type:"table", head:[{fr,en}...], rows:[[{fr,en}...], ...] }
     { type:"tags", items:["...","..."] }  tag pills
   Any text value may be a plain string or an {fr,en} object.
   ----------------------------------------------------------------- */
function projectBody(body){
  if (!Array.isArray(body)) return "";
  const fig = (src, cap) => `
      <figure class="proj-figure">
        <img src="${esc(src)}" alt="${esc(t(cap) || "")}" loading="lazy">
        ${cap ? `<figcaption>${t(cap)}</figcaption>` : ""}
      </figure>`;
  const one = b => {
    switch (b.type){
      case "h3":      return `<h3>${t(b.text)}</h3>`;
      case "p":       return `<p>${t(b.text)}</p>`;
      case "ul":      return `<ul>${b.items.map(x => `<li>${t(x)}</li>`).join("")}</ul>`;
      case "img":     return fig(b.src, b.caption);
      case "gallery": return `<div class="proj-gallery">${b.items.map(it => fig(it.src, it.caption)).join("")}</div>`;
      case "code":    return `<pre class="proj-code"><code>${esc(b.text)}</code></pre>`;
      case "table":   return `<div class="proj-table-wrap"><table class="proj-table">`
        + `<thead><tr>${b.head.map(h => `<th>${t(h)}</th>`).join("")}</tr></thead>`
        + `<tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${t(c)}</td>`).join("")}</tr>`).join("")}</tbody>`
        + `</table></div>`;
      case "tags":    return `<div class="tags">${b.items.map(x => `<span class="tag">${x}</span>`).join("")}</div>`;
      default:        return "";
    }
  };
  const groups = [];
  let cur = null;
  for (const b of body){
    if (b.type === "h2"){ cur = { heading: b.text, html: "" }; groups.push(cur); continue; }
    if (!cur){ cur = { heading: null, html: "" }; groups.push(cur); }
    cur.html += one(b);
  }
  return groups.map(g =>
    `<div class="content-block">${g.heading ? `<h2>${t(g.heading)}</h2>` : ""}${g.html}</div>`).join("");
}

/* "In brief" box shown above the project body: 3-5 quick-read bullets. */
function projectHighlights(p){
  if (!p || !Array.isArray(p.highlights) || !p.highlights.length) return "";
  return `<div class="content-block highlights">
      <h2>${t({ fr: "En bref", en: "In brief" })}</h2>
      <ul>${p.highlights.map(x => `<li>${t(x)}</li>`).join("")}</ul>
    </div>`;
}

const NAV = [
  { href: "index.html",                 label: { fr: "Accueil",     en: "Home" } },
  { href: "my-profile.html",            label: { fr: "À propos",    en: "About" } },
  { href: "my-courses-2025-2026.html",  label: { fr: "Cours",       en: "Courses" } },
  { href: "my-projects.html",           label: { fr: "Projets",     en: "Projects" } },
  { href: "my-pro-projects.html",       label: { fr: "Pro",         en: "Professional" } },
  { href: "my-cv.html",                 label: { fr: "CV",          en: "CV" } }
];

function chrome(){
  const here = location.pathname.split("/").pop() || "index.html";
  const isCourse = here.startsWith("my-courses");
  document.querySelectorAll("[data-chrome='header']").forEach(el => {
    el.innerHTML = `
      <div class="wrap bar">
        <a class="site-title" href="index.html">${esc(DATA.name)}</a>
        <nav class="site-nav">
          ${NAV.map(n => {
            const on = n.href === here || (isCourse && n.href.startsWith("my-courses"));
            return `<a href="${n.href}" class="${on ? "active" : ""}">${t(n.label)}</a>`;
          }).join("")}
        </nav>
        <div class="lang">
          <button data-lang="en" aria-pressed="${lang==="en"}">EN</button>
          <button data-lang="fr" aria-pressed="${lang==="fr"}">FR</button>
        </div>
      </div>`;
    el.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
      lang = b.dataset.lang;
      document.documentElement.lang = lang;
      paint();
    }));
  });

  document.querySelectorAll("[data-chrome='footer']").forEach(el => {
    el.innerHTML = `
      <div class="wrap">
        <div class="footer-cols">
          <div>
            <h4>${esc(DATA.name)}</h4>
            <ul>
              <li><a href="mailto:${DATA.email}">${DATA.email}</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&amp;query=%C3%98sterbrogade%20119%2C%202100%20K%C3%B8benhavn" target="_blank" rel="noopener">Østerbrogade 119, 2100 København</a></li>
              <li><a href="tel:+33772200247">+33 7 72 20 02 47</a></li>
            </ul>
          </div>
          <div>
            <h4>${t({fr:"Navigation",en:"Navigation"})}</h4>
            <ul>${NAV.slice(1).map(n => `<li><a href="${n.href}">${t(n.label)}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>${t({fr:"Liens web",en:"Web links"})}</h4>
            <ul class="footer-links">
              <li><a href="${DATA.github}" target="_blank" rel="noopener">${FICON.github}ArthurBUIS</a></li>
              <li><a href="${DATA.linkedin}" target="_blank" rel="noopener">${FICON.linkedin}arthurbuis</a></li>
            </ul>
          </div>
        </div>
        <div class="legal">
          <span>&copy; 2026 ${esc(DATA.name)}</span>
          <span><a href="privacy.html">${t({fr:"Confidentialité",en:"Privacy"})}</a></span>
        </div>
      </div>`;
  });
}

/* every page defines its own paintPage(); paint() redraws on language switch */
function paint(){
  chrome();
  if (typeof paintPage === "function") paintPage();
}
document.addEventListener("DOMContentLoaded", paint);
