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

// FALLING LEAVES ANIMATION

const leafContainer = document.getElementById("leaf-container");

function createLeaf() {

    if (!leafContainer) return;

    const leaf = document.createElement("div");

    leaf.classList.add("falling-leaf");
    leaf.textContent = "🍃";

    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = (5 + Math.random() * 5) + "s";
    leaf.style.fontSize = (16 + Math.random() * 15) + "px";

    leafContainer.appendChild(leaf);

    setTimeout(function () {
        leaf.remove();
    }, 10000);
}

setInterval(createLeaf, 1200);