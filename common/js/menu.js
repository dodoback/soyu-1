function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const toggleIcon = document.getElementById("menuToggle");

  menu.classList.toggle("show");
  toggleIcon.classList.toggle("rotate");
}
