function PrimaryMenuLinks() {

    var ul = document.createElement("ul");

    for (i = 0; i < Menus.Primary.length; i++) {

        var item = Menus.Primary[i];

        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", item.Link);

        a.appendChild(createSVG(item.SVG));

        var span = document.createElement("span");
        span.classList.add("text");
        span.innerHTML = item.Title;

        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);
    }

    var t = document.getElementById("primaryMenu");
    t.innerHTML = "";
    t.appendChild(ul);
}


function createSVG(obj) {
    //var obj = Menus.Primary[0].SVG
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", false);
    svg.setAttribute("data-prefix", "fas");
    svg.setAttribute("data-icon", obj["data-icon"]);
    for (var i = 0; i < obj.class.length; i++) {
        svg.classList.add(obj.class[i]);
    }
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("role", "img");
    svg.setAttribute("viewBox", obj.viewBox);
    svg.appendChild(svgPath(obj.path.d));
    return svg;
}

function svgPath(path) {
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("fill", "currentColor");
    p.setAttribute("d", path);
    return p;
}