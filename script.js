const menuButton = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
    navLinks.classList.toggle("active", !isExpanded);
});
