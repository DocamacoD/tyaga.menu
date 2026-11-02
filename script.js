const categoryButtons = document.querySelectorAll(".category");
const menuItems = document.querySelectorAll("[data-category]");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.category;

    categoryButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    menuItems.forEach((item) => {
      const matches = selected === "all" || item.dataset.category === selected;
      item.hidden = !matches;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
