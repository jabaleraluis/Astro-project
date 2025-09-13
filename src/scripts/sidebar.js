const expand_btn = document.querySelector(".expand-btn");

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
  const btn = document.querySelector(".expand-icon");
  if (document.body.classList.contains("collapsed")) {
    btn.classList.remove("ri-sidebar-fold-line");
    btn.classList.add("ri-sidebar-unfold-line");
  } else {
    btn.classList.remove("ri-sidebar-unfold-line");
    btn.classList.add("ri-sidebar-fold-line");
  }
});

const current = window.location.href;
const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});
