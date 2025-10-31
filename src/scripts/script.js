import themeSwitcher from "./theme_switcher.js";
import navbarMenuToggle from "./navbar_menu_toggle.js";
import glowEffect from "./glow_effect.js";
import scrollUp from "./scroll_up.js";

document.addEventListener("DOMContentLoaded", (e) => {
  themeSwitcher(".theme__switcher .theme__icon");
  navbarMenuToggle(
    ".navbar__container .navbar__toggle__btn",
    ".navbar__container .navbar__links",
    ".navbar__container .navbar__links a"
  );
  scrollUp(".scroll__up");
  glowEffect(".slide-track .slide .tech-item");

  /* ===== SCROLL REVEAL ===== */
  /* const sr = {
  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    easing: "ease",
    duration: 800,
    delay: 150,
    reset: true,
    once: true,
    cleanup: true,
  });
  sr.reveal("header");

  sr.reveal(
    `.presentation__title h1, .presentation__title .name__line, .presentation__title h2,
      .tech__preview .title, .tech__preview .see__all`,
    {
      origin: "left",
      interval: 200,
    }
  );
  sr.reveal(".presentation__buttons, .header__picture .picture", {
    origin: "bottom",
    interval: 200,
  });
  sr.reveal(".tech__preview .slider", { origin: "right" });

  sr.reveal(".header__picture .arrows, .header__picture .background", {
    interval: 200,
    scale: 0.75,
  });
  }; */



});
