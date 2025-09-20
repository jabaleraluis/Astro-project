export default function menuToggle(toggle_btn, menu, links) {
  const d = document,
    $active_links = d.querySelectorAll(links),
    location = window.location.href,
    $toggle_btn = d.querySelector(toggle_btn),
    $menu = d.querySelector(menu);

  d.addEventListener("click", (e) => {
    if (e.target.matches(toggle_btn) || e.target.matches(`${toggle_btn} *`)) {
      $toggle_btn.classList.toggle("active");
      $menu.classList.toggle("collapsed");
    } else if (!e.target.closest(menu) && !e.target.closest(toggle_btn)) {
      if ($menu.classList.contains("collapsed")) {
        $menu.classList.remove("collapsed");
        $toggle_btn.classList.remove("active");
      }
    }
  });

  $active_links.forEach((link) => {
    if (link.href === location) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
