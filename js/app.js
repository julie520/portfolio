const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle('change');
});

sidebar.addEventListener("click", (e) => {
  if (e.target.className === "nav-link") {
    sidebar.classList.toggle("change");
  }
});
