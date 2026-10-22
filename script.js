document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header, section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 120)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.style.backgroundColor = "";
            item.style.color = "";
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.style.backgroundColor = "#9785B9";
                item.style.color = "#0A3221";
            }
        });
    });
});
