document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initStickyHeader();
  renderBanner();
  renderProjects();
  renderFounders();
  renderEvents();
  renderStats();
  setJoinLink();
  setYear();
  initScrollReveal();
});

/* =========================================================
   Icons (inline so there is no external dependency)
   ========================================================= */

var ICON = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
};

/* =========================================================
   Navigation
   ========================================================= */

function initNav() {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-navigation");
  var scrim = document.querySelector("[data-nav-scrim]");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  if (scrim) {
    scrim.addEventListener("click", function () { setOpen(false); });
  }

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Leaving the mobile breakpoint must not strand the page in the open state.
  var desktop = window.matchMedia("(min-width: 721px)");
  var onChange = function (event) { if (event.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener("change", onChange);
  else desktop.addListener(onChange);
}

function initStickyHeader() {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var update = function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* =========================================================
   Announcement banner
   ========================================================= */

var BANNER_DISMISS_KEY = "fazz-banner-dismissed";

function renderBanner() {
  // config.js declares BANNER_CONFIG with a top-level `const`, which creates a
  // global lexical binding but NOT a property on `window` — so read it directly.
  var config = typeof BANNER_CONFIG !== "undefined" ? BANNER_CONFIG : undefined;
  var container = document.getElementById("site-banner");
  if (!container || !config || !config.enabled || !config.text) return;

  if (config.dismissible && localStorage.getItem(BANNER_DISMISS_KEY) === config.text) {
    return;
  }

  var linkHtml = config.linkUrl
    ? `<a class="site-banner-link" href="${config.linkUrl}" target="_blank" rel="noreferrer">${config.linkText || "Learn more"} ${ICON.arrow}</a>`
    : "";
  var closeHtml = config.dismissible
    ? `<button type="button" class="site-banner-close" aria-label="Dismiss banner">&times;</button>`
    : "";

  container.innerHTML = `
    <div class="site-banner-inner container">
      <p class="site-banner-text">${config.text}</p>
      ${linkHtml}
      ${closeHtml}
    </div>
  `;
  container.classList.add("is-visible");

  var closeBtn = container.querySelector(".site-banner-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      container.classList.remove("is-visible");
      container.innerHTML = "";
      localStorage.setItem(BANNER_DISMISS_KEY, config.text);
    });
  }
}

/* =========================================================
   Content rendering
   ========================================================= */

function emptyState(message) {
  return `<p class="empty-state">${message}</p>`;
}

function visualFor(item, label) {
  var inner = item.image
    ? `<img src="${item.image}" alt="${item.imageAlt || label}" />`
    : label.charAt(0).toUpperCase();
  return `<div class="project-visual">${inner}</div>`;
}

function renderProjects() {
  var containers = document.querySelectorAll("[data-project-grid]");

  containers.forEach(function (container) {
    // `data-project-grid="students"` (or "elderly") narrows the list to the
    // projects that declare that audience; an empty value shows everything.
    var audience = container.getAttribute("data-project-grid");
    var visibleProjects = audience
      ? projects.filter(function (project) {
          return (project.audience || []).indexOf(audience) !== -1;
        })
      : projects;

    var limit = container.getAttribute("data-project-limit");
    if (limit) visibleProjects = visibleProjects.slice(0, Number(limit));

    if (!visibleProjects.length) {
      container.innerHTML = emptyState(
        container.getAttribute("data-project-empty") || "No projects yet. Add one to the data file."
      );
      return;
    }

    container.innerHTML = visibleProjects.map(function (project) {
      var links = [];
      if (project.link && project.link !== "#") {
        links.push(`<a href="${project.link}" target="_blank" rel="noreferrer">View project ${ICON.external}</a>`);
      }
      if (project.github && project.github !== "#") {
        links.push(`<a href="${project.github}" target="_blank" rel="noreferrer">${ICON.github} GitHub</a>`);
      }

      return `
        <article class="project-card">
          ${visualFor(project, project.name)}
          <div class="project-body">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <ul class="project-tags">
              ${project.tags.map(function (tag) { return `<li>${tag}</li>`; }).join("")}
            </ul>
            <ul class="tech-list">
              ${project.technologies.map(function (tech) { return `<li>${tech}</li>`; }).join("")}
            </ul>
            ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
          </div>
        </article>
      `;
    }).join("");
  });
}

function renderEvents() {
  var containers = document.querySelectorAll("[data-events-grid]");
  var eventsByAudience = {
    students: typeof studentEvents !== "undefined" ? studentEvents : [],
    elderly: typeof elderlyEvents !== "undefined" ? elderlyEvents : []
  };

  containers.forEach(function (container) {
    var audience = container.getAttribute("data-events-grid");
    var events = eventsByAudience[audience] || [];

    if (!events.length) {
      container.innerHTML = emptyState("No events scheduled yet — check back soon.");
      return;
    }

    container.innerHTML = events.map(function (event) {
      var linkHtml = event.link
        ? `<div class="project-links"><a href="${event.link}" target="_blank" rel="noreferrer">Sign up ${ICON.arrow}</a></div>`
        : "";

      return `
        <article class="project-card event-card">
          ${visualFor(event, event.title)}
          <div class="project-body">
            <h3>${event.title}</h3>
            <ul class="event-meta">
              <li>${ICON.calendar}<span>${event.date}</span></li>
              <li>${ICON.pin}<span>${event.location}</span></li>
            </ul>
            <p>${event.description}</p>
            ${linkHtml}
          </div>
        </article>
      `;
    }).join("");
  });
}

function renderFounders() {
  var containers = document.querySelectorAll("[data-founders-grid]");

  containers.forEach(function (container) {
    var category = container.getAttribute("data-founders-grid");
    var visibleFounders = category
      ? founders.filter(function (founder) { return founder.category === category; })
      : founders;

    if (!visibleFounders.length) {
      container.innerHTML = emptyState("No team members yet. Add one to the data file.");
      return;
    }

    container.innerHTML = visibleFounders.map(function (founder) {
      var avatarHtml = founder.image
        ? `<img src="${founder.image}" alt="${founder.imageAlt || founder.name}" />`
        : founder.name.charAt(0).toUpperCase();

      return `
        <article class="card founder-card">
          <div class="founder-avatar">${avatarHtml}</div>
          <h3>${founder.name}</h3>
          <span class="founder-role">${founder.role}</span>
          <p>${founder.bio}</p>
        </article>
      `;
    }).join("");
  });
}

function renderStats() {
  var containers = document.querySelectorAll("[data-stats-grid]");

  containers.forEach(function (container) {
    if (!stats.length) return;

    container.innerHTML = stats.map(function (stat) {
      return `
        <div class="stat-item">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `;
    }).join("");
  });
}

function setJoinLink() {
  var url = (typeof JOIN_FORM_URL !== "undefined" && JOIN_FORM_URL) || "#";
  document.querySelectorAll("[data-join-link]").forEach(function (link) {
    link.href = url;
  });
}

function setYear() {
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });
}

/* =========================================================
   Scroll reveal
   ========================================================= */

function initScrollReveal() {
  var targets = document.querySelectorAll("[data-animate]");
  if (!targets.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px" });

  targets.forEach(function (el) { observer.observe(el); });
}
