document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-navigation");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  renderProjects();
  renderFounders();
  renderStats();
  setJoinLink();
  initScrollReveal();
});

var TILE_GRADIENTS = [
  "linear-gradient(135deg, #6d5bf7, #ec4899)",
  "linear-gradient(135deg, #22d3ee, #6d5bf7)",
  "linear-gradient(135deg, #ec4899, #f59e0b)",
];

function renderProjects() {
  var containers = document.querySelectorAll("[data-project-grid]");

  containers.forEach(function (container) {
    var limit = container.getAttribute("data-project-limit");
    var visibleProjects = limit ? projects.slice(0, Number(limit)) : projects;

    if (!visibleProjects.length) {
      container.innerHTML = "<p>No projects yet. Add one to the data file.</p>";
      return;
    }

    container.innerHTML = visibleProjects.map(function (project, index) {
      var visualHtml = project.image
        ? `<img src="${project.image}" alt="${project.imageAlt || project.name}" class="project-image" />`
        : project.name.charAt(0).toUpperCase();
      var visualStyle = project.image ? "" : ` style="background: ${TILE_GRADIENTS[index % TILE_GRADIENTS.length]}"`;

      return `
        <article class="project-card">
          <div class="project-visual"${visualStyle}>${visualHtml}</div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <ul class="project-tags">
            ${project.tags.map(function (tag) { return `<li>${tag}</li>`; }).join("")}
          </ul>
          <ul class="tech-list">
            ${project.technologies.map(function (tech) { return `<li>${tech}</li>`; }).join("")}
          </ul>
          <div class="project-links">
            <a href="${project.link}" target="_blank" rel="noreferrer">View Project</a>
            <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      `;
    }).join("");
  });
}

function renderFounders() {
  var containers = document.querySelectorAll("[data-founders-grid]");

  containers.forEach(function (container) {
    if (!founders.length) {
      container.innerHTML = "<p>No founders yet. Add one to the data file.</p>";
      return;
    }

    container.innerHTML = founders.map(function (founder, index) {
      var avatarHtml = founder.image
        ? `<img src="${founder.image}" alt="${founder.imageAlt || founder.name}" />`
        : founder.name.charAt(0).toUpperCase();
      var avatarStyle = founder.image ? "" : ` style="background: ${TILE_GRADIENTS[index % TILE_GRADIENTS.length]}"`;

      return `
        <article class="card founder-card">
          <div class="founder-avatar"${avatarStyle}>${avatarHtml}</div>
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
        <article class="card stat-card">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </article>
      `;
    }).join("");
  });
}

function setJoinLink() {
  var joinLinks = document.querySelectorAll("[data-join-link]");

  joinLinks.forEach(function (link) {
    link.href = window.JOIN_FORM_URL || "#";
  });
}

function initScrollReveal() {
  var targets = document.querySelectorAll("[data-animate]");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
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
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
}
