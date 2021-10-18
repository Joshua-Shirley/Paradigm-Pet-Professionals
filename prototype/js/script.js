function menuToggle() {
    var nav = document.getElementsByTagName("nav")[0];
    var main = document.getElementsByTagName("main")[0];
    var footer = document.getElementsByTagName("footer")[0];
    var body = document.getElementBy
    if (nav.style.display === "none") {
        nav.style.display = "block";
        main.style.display = "none";
        footer.style.display = "none";
        document.body.style.backgroundColor = "#4b465d";
    } else {
        nav.style.display = "none";
        main.style.display = "block";
        footer.style.display = "block";
        document.body.style.backgroundColor = initial;
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

function updateCopyRight() {
    var d = new Date();
    var t = document.getElementById("copyrightYear");
    t.innerHTML = d.getFullYear();
}

updateCopyRight();