// Add event listener to buttons
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });
});

// Scroll to section on navigation click
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").slice(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    });
});


