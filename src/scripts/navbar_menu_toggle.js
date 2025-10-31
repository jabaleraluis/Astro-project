export default function navbarMenuToggle(toggleBtn, menu, links) {
  const d = document,
    $toggleBtn = d.querySelector(toggleBtn),
    $menu = d.querySelector(menu),
    $activeLinks = d.querySelectorAll(links),
    location = window.location.pathname;

  d.addEventListener("click", (e) => {
    if (e.target.matches(toggleBtn) || e.target.matches(`${toggleBtn} *`)) {
      $toggleBtn.classList.toggle("active");
      $menu.classList.toggle("collapsed");
    } else if (!e.target.closest(menu) && !e.target.closest(toggleBtn)) {
      if ($menu.classList.contains("collapsed")) {
        $menu.classList.remove("collapsed");
        $toggleBtn.classList.remove("active");
      }
    }
  });

  d.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $menu.classList.contains("collapsed")) {
      $menu.classList.remove("collapsed");
      $toggleBtn.classList.remove("active");
    }
  });

  $activeLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === location) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
