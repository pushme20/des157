// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.madlib.onsubmit = processForm;

    function processForm() {
        var question1 = document.madlib.name.value;
        if (question1 == "Yesterday") {
            console.log("Submit successful");
        }

        return false;
    }

});
