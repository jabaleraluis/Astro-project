import themeToggle from "/src/scripts/theme-toggle.js";
import menuToggle from "../scripts/menu.js";
import sidebar from "./sidebar.js";

document.addEventListener("DOMContentLoaded", (e) => {
  themeToggle(".theme-switcher .icon");
  menuToggle(".menu-toggle", "nav ul.menu");
  sidebar(".sidebar-top-wrapper .expand-btn", ".search-wrapper input", ".menu-links a");
});
