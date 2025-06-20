document.querySelector("#toggle").addEventListener("change", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

const projects = [
  {
    catigory: "Web Development",
    Id: "web",
    projects: [
      {
        name: "Landing page generator",
        link: "https://github.com/w4rdr43w4n/landingPageV2",
      },
      {
        name: "Telegram Clone",
        link: "https://github.com/w4rdr43w4n/Telegram-Clone",
      },

      {
        name: "Authentication library",
        link: "https://github.com/w4rdr43w4n/Auth-System",
      },
      {
        name: "Music Player",
        link: "https://github.com/w4rdr43w4n/MusicPlayer",
      },
    ],
  },
  {
    catigory: "AI / Machine Learning",
    Id: "ai",
    projects: [
      {
        name: "Research Platform with AI",
        link: "https://github.com/w4rdr43w4n/G6Latest",
      },
    ],
  },
  {
    catigory: "Shell scripts",
    Id: "sh",
    projects: [
      {
        name: "Modern cpp compiler helper",
        link: "https://github.com/w4rdr43w4n/G6Latest",
      },
    ],
  },
  {
    catigory: "Other",
    Id: "oth",
    projects: [
      {
        name: "Database library with C#",
        link: "https://github.com/w4rdr43w4n/Database-Project-CS",
      },
    ],
  },
];
const categories = document.querySelector(".catigories-list");

projects.forEach((proj) => {
  const a = document.createElement("a");
  a.href = "#" + proj.Id;
  a.textContent = proj.catigory;
  categories.appendChild(a);
});

function createProjectItem(catigory, id, projectList) {
  const details = document.createElement("details");
  details.className = "project-box";
  details.id = id;

  const summary = document.createElement("summary");
  summary.className = "project-category";
  summary.textContent = catigory;

  const ul = document.createElement("ul");
  ul.className = "project-list";
  projectList.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project-item";

    const a = document.createElement("a");
    a.className = "project-link";
    a.href = project.link || "#";
    a.textContent = project.name;

    li.appendChild(a);
    ul.appendChild(li);
  });

  details.appendChild(summary);
  details.appendChild(ul);

  return details;
}

const container = document.querySelector(".project-list");

projects.forEach((section) => {
  const projItem = createProjectItem(
    section.catigory,
    section.Id,
    section.projects
  );
  container.appendChild(projItem);
});
