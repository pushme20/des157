// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.madlibs.onsubmit = processForm;

    function processForm() {
        var question1 = document.madlibs.question1.value;
        if (question1 == "Yesterday") {
            console.log("Submit successful");
        }

        return false;
    }

});
