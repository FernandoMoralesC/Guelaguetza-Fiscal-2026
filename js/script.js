const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Evita que los enlaces provisionales de las galerías recarguen la página.
document.querySelectorAll('.gallery-card[href="#"]').forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
