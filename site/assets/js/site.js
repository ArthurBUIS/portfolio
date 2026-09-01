/* ============================================================
   Shared chrome: header, footer, FR/EN switch.
   Language choice lives in memory only (no storage), so every
   page opens in English and the toggle re-renders in place.
   ============================================================ */
let lang = "en";
const $ = id => document.getElementById(id);
const t = v => (v && typeof v === "object" && "fr" in v) ? v[lang] : v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

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

const NAV = [
  { href: "index.html",                 label: { fr: "Accueil",     en: "Home" } },
  { href: "my-profile.html",            label: { fr: "À propos",    en: "About" } },
  { href: "my-courses-2021-2022.html",  label: { fr: "Cours",       en: "Courses" } },
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
              <li>${t({fr:"Région de Copenhague",en:"Copenhagen area"})}</li>
            </ul>
          </div>
          <div>
            <h4>${t({fr:"Navigation",en:"Navigation"})}</h4>
            <ul>${NAV.slice(1).map(n => `<li><a href="${n.href}">${t(n.label)}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>${t({fr:"Ailleurs",en:"Elsewhere"})}</h4>
            <div class="footer-social">
              <a href="${DATA.github}" target="_blank" rel="noopener">GitHub</a>
              <a href="${DATA.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            </div>
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
