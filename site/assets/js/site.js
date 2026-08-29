/* ============================================================
   Shared chrome: header, footer, FR/EN switch.
   Language choice lives in memory only (no storage), so every
   page opens in English and the toggle re-renders in place.
   ============================================================ */
let lang = "en";
const $ = id => document.getElementById(id);
const t = v => (v && typeof v === "object" && "fr" in v) ? v[lang] : v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const NAV = [
  { href: "index.html",                 label: { fr: "Accueil",     en: "Home" } },
  { href: "my-profile.html",            label: { fr: "Profil",      en: "Profile" } },
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
