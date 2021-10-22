// hold the form data in a JSON object.
let json = {
    "email": "",
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "petName": "",
    "petType": "",
    "petAgeYears": "",
    "petAgeMonths": "",
    "question": ""
};

const patterns = {
    "email": "([a-zA-Z0-9!#$%&+/=?^_-{}|~.]+)([@]{1})([a-zA-Z0-9]{1})([a-zA-Z0-9-]+)([a-zA-Z0-9]{1})([.]{1})([a-zA-Z0-9]{1})([a-zA-Z0-9-]+)([a-zA-Z0-9]{1})",
    "phone": "([0-9. +()\-]{7,15})$",
    "name": "^[a-zA-Z ,.'-]+$",
    "wholeNumber": "[0-9]+",
    "all": "\d\w\s"
}

function regexInput(pattern, value) {
    const regex = new RegExp(pattern, 'm');
    var valid = false;
    if (regex.test(value)) {
        valid = true;
    }
    return valid;
}

function validateInput2(element) {
    // collect element

    // Input Type

    // Includes a pattern

    // Is the a min / max

}


function validateInput(element) {
    var p;
    var name = element.name;
    console.log(element);
    if (name == "email") {
        p = patterns.email;
    } else if (name == "phoneNumber") {
        p = patterns.phone;
    } else if (name == "firstName" || name == "lastName" || name == "petName") {
        p = patterns.name;
    } else if (name == "petAgeYears" || name == "petAgeMonths") {
        p = patterns.wholeNumber;
    } else {
        return;
    }

    if (regexInput(p, value)) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}

var list = document.querySelectorAll("#cta input, #cta textarea");
for (i = 0; i < list.length; i++) {
    list[i].onblur = function(e) { validateInput(this) };
}

// Call a function when the form is submitted.
document.forms["cta"].onsubmit = validateForms;

function validateForms(e) {
    e.preventDefault();
    collectInputs(document.forms.cta);
    console.log(json);
    return false;
}


// move the form data into the JSON object
function collectInputs(form) {
    var f = form;
    for (i = 0; i < f.length; i++) {
        var t = f[i].type;
        var k = f[i].name;
        var v = f[i].value;
        var p = f[i].pattern;

        if (v != '') {
            if (t == "email") {
                json.email = v;
            } else if (t == "text") {
                json[k] = v;
            } else if (t == "phone") {
                json[k] = v;
            } else if (t == "number") {
                json[k] = v;
            } else if (t == "radio") {
                if (f[i].checked) {
                    json[k] = v;
                }
            } else if (t == "checkbox") {
                if (f[i].checked) {
                    json[k] = v;
                }
            } else if (t == "textarea") {
                json[k] = v;
            }
        }
    }
    return json;
}