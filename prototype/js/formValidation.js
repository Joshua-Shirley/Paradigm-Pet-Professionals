// get the form object.
var f = document.forms["cta"];
// hold the form data in a JSON object.
const d = {};

// move the form data into the JSON object
function collectInputs(form) {
    var json = {};
    for (i = 0; i < f.length; i++) {
        var t = form[i].type;
        var k = form[i].name;
        var v = form[i].value;

        if (v != '') {
            if (k == "email") {
                json[k] = v;
            } else if (k == "text") {
                json[k] = v;
            } else if (k == "phone") {
                json[k] = v;
            } else if (k == "radio") {
                if (form[i].checked) {
                    json[k] = v;
                }
            } else if (k == "checkbox") {
                if (form[i].checked) {
                    json[k] = v;
                }
            }
        }
    }
    return json;
}