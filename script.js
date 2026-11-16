
// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("mobile-menu-toggle");
const mainNavigation = document.getElementById("main-navigation");

if (menuToggle && mainNavigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNavigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after selecting a link
    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNavigation.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


// CONTACT FORM SENDING MESSAGE

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        const submitButton = document.getElementById("submit-button");
        const formStatus = document.getElementById("form-status");

        if (submitButton) {
            submitButton.textContent = "Sending Request...";
            submitButton.disabled = true;
        }

        if (formStatus) {
            formStatus.textContent = "Please wait while we send your request.";
        }
    });
}
