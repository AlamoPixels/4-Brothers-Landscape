// MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobile-menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (!menuButton || !navigation) {
        console.log("Mobile menu elements not found.");
        return;
    }

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuButton.textContent = isOpen ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);

    });

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");

        });

    });

});