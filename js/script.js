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
  setJoinLink();
});

function renderProjects() {
  var containers = document.querySelectorAll("[data-project-grid]");

  containers.forEach(function (container) {
    var limit = container.getAttribute("data-project-limit");
    var visibleProjects = limit ? projects.slice(0, Number(limit)) : projects;

    if (!visibleProjects.length) {
      container.innerHTML = "<p>No projects yet. Add one to the data file.</p>";
      return;
    }

    container.innerHTML = visibleProjects.map(function (project) {
      var imageHtml = project.image 
        ? `<img src="${project.image}" alt="${project.imageAlt || project.name}" class="project-image" />` 
        : "";
      
      return `
        <article class="project-card">
          <div class="project-visual">${imageHtml}</div>
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

function setJoinLink() {
  var joinLinks = document.querySelectorAll("[data-join-link]");

  joinLinks.forEach(function (link) {
    link.href = window.JOIN_FORM_URL || "#";
  });
}
