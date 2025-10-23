/* export default function glowHover() {
  const items = document.querySelectorAll(".tech__wrapper .tech-item");

  items.forEach(item => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
    });
  });
} */