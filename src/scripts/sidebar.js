// const expand_btn = document.querySelector(".expand-btn");

// expand_btn.addEventListener("click", () => {
//   document.body.classList.toggle("collapsed");
//   const btn = document.querySelector(".expand-icon");
//   if (document.body.classList.contains("collapsed")) {
//     btn.classList.remove("ri-sidebar-fold-line");
//     btn.classList.add("ri-sidebar-unfold-line");
//   } else {
//     btn.classList.remove("ri-sidebar-unfold-line");
//     btn.classList.add("ri-sidebar-fold-line");
//   }
// });

// const current = window.location.href;
// const allLinks = document.querySelectorAll(".menu-links a");

// // Función para actualizar el enlace activo
// function updateActiveLink(activeHref) {
//   allLinks.forEach((link) => {
//     if (link.href === activeHref) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// }

// // Establecer el enlace activo al cargar la página
// allLinks.forEach((link) => {
//   if (link.href === current) {
//     link.classList.add("active");
//   } else {
//     link.classList.remove("active");
//   }
// });

// // Manejar clicks en los enlaces
// allLinks.forEach((elem) => {
//   elem.addEventListener("click", function () {
//     const hrefLinkClick = elem.href;
//     updateActiveLink(hrefLinkClick);
//   });
// });

// // Opcional: También manejar cambios en el historial (botones atrás/adelante)
// /* window.addEventListener("popstate", function () {
//   const currentUrl = window.location.href;
//   updateActiveLink(currentUrl);
// }); */

// const searchInput = document.querySelector(".search__wrapper input");

// searchInput.addEventListener("focus", (e) => {
//   document.body.classList.remove("collapsed");
// });

export default function sidebar(expand_btn, search_input, links) {
  const d = document,
    icon = d.querySelector(".sidebar-top-wrapper .expand-icon"),
    active_links = d.querySelectorAll(links),
    location = window.location.href;

  d.addEventListener("click", (e) => {
    if (e.target.matches(expand_btn) || e.target.matches(`${expand_btn} *`)) {
      d.body.classList.toggle("collapsed");
      if (d.body.classList.contains("collapsed")) {
        icon.classList.remove("ri-sidebar-fold-line");
        icon.classList.add("ri-sidebar-unfold-line");
      } else {
        icon.classList.remove("ri-sidebar-unfold-line");
        icon.classList.add("ri-sidebar-fold-line");
      }
    }

    if (e.target.matches(search_input)) {
      d.body.classList.remove("collapsed");
    }

    active_links.forEach((link) => {
      if (link.href === location) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}
