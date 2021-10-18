function menuToggle() {
    var nav = document.getElementsByTagName("nav")[0];
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

function hamburgerClick() {
    var t = document.querySelectorAll(".mobileMenuIcon a.menuButton")[0];
    if (t.classList.contains("checked")) {
        t.classList.remove("checked");
    } else {
        t.classList.add("checked");
    }
}