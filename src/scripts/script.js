import themeToggle from "../scripts/theme-toggle.js";
import menuToggle from "../scripts/menu.js";

document.addEventListener("DOMContentLoaded", (e) => {
  themeToggle(".theme-switcher .icon");
  menuToggle(".navbar-container .toggle-btn", ".navbar-container .nav-links", ".navbar-container .nav-links a");
});
