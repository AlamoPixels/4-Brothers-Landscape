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

    // Start just outside the left edge
    leaf.style.left = "-40px";

    // Spread leaves across the entire screen height
    leaf.style.top = Math.random() * 100 + "vh";

    // Random sizes and speeds
    leaf.style.fontSize = (18 + Math.random() * 18) + "px";
    leaf.style.animationDuration = (10 + Math.random() * 8) + "s";

    leafContainer.appendChild(leaf);

    setTimeout(function () {
        leaf.remove();
    }, 19000);
}

// Create 4 leaves every second
setInterval(function () {
    for (let i = 0; i < 4; i++) {
        createLeaf();
    }
}, 1000);
