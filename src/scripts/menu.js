/* export default function menuToggle(toggleSelector, menuSelector) {
  const toggle = document.querySelector(toggleSelector);
  const menu = document.querySelector(menuSelector);
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
} */

/* export default function menuToggle(toggle_btn, menu) {
  const $toggle_btn = document.querySelector(".navbar .menu-toggle i");
  const $menu = document.querySelector(".navbar .menu");

  $toggle_btn.addEventListener("click", () => {
    $menu.classList.toggle("active");
  });

} */

export default function menuToggle(toggle_btn, menu, links) {
  const d = document,
    active_links = d.querySelectorAll(links),
    location = window.location.href;

  d.addEventListener("click", (e) => {
    if (e.target.matches(toggle_btn) || e.target.matches(`${toggle_btn} *`)) {
      d.querySelector(toggle_btn).classList.toggle("active");
      d.querySelector(menu).classList.toggle("active");
    }
  });

  active_links.forEach((link) => {
    if (link.href === location) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
