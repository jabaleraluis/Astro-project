import themeToggle from "/src/scripts/theme-toggle.js";
import { menuToggle } from "../scripts/menu.js";

document.addEventListener("DOMContentLoaded", (e) => {
  themeToggle(".theme-switcher .icon");
  menuToggle(".menu-toggle", "nav ul.menu");
});
