document.querySelector(".menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "disabled");
};
darkmode = localStorage.getItem("darkmode");

if (darkmode === "active") {
  document.body.classList.add("darkmode");
}
document.querySelector(".themeToggle").addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode === "active" ? disableDarkmode() : enableDarkmode();
});
enableDarkmode();

