export default function themeToggle(icon) {
  const icons = document.querySelectorAll(icon);

  function setTheme(theme) {
    document.documentElement.classList.remove("dark");
    icons.forEach((icon) => icon.classList.remove("active"));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector('[data-theme="dark"]').classList.add("active");
    } else {
      document.querySelector('[data-theme="light"]').classList.add("active");
    }

    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme);

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const theme = icon.dataset.theme;
      setTheme(theme);
    });
  });
}
/* export default function themeToggle(icon) {
  const icons = document.querySelectorAll(icon);

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.classList.remove("dark");
    icons.forEach((icon) => icon.classList.remove("active"));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector('.theme-switcher .icon[data-theme="dark"]').classList.add("active");
    } else if (theme === "light") {
      document.querySelector('.theme-switcher .icon[data-theme="light"]').classList.add("active");
    } else {
      const systemTheme = getSystemTheme();
      if (systemTheme === "dark") document.documentElement.classList.add("dark");
      document.querySelector('.theme-switcher .icon[data-theme="system"]').classList.add("active");
    }

    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "system";
  setTheme(savedTheme);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme") === "system") {
      setTheme("system");
    }
  });

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const theme = icon.dataset.theme;
      setTheme(theme);
    });
  });
} */
