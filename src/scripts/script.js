import themeSwitcher from "./theme_switcher.js";
import navbarMenuToggle from "./navbar_menu_toggle.js";
/* import glowHover from "./glow.js"; */

document.addEventListener("DOMContentLoaded", (e) => {
  themeSwitcher(".theme__switcher .theme__icon");
  navbarMenuToggle(".navbar__container .navbar__toggle__btn", ".navbar__container .navbar__links", ".navbar__container .navbar__links a");
  /* glowHover(); */
});
