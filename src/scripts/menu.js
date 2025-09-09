export function menuToggle(toggleSelector, menuSelector) {
  const toggle = document.querySelector(toggleSelector);
  const menu = document.querySelector(menuSelector);
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}