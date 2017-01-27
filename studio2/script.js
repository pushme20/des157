// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.madlib.onsubmit = processForm;

    function processForm() {
        var question1 = document.madlib.q1.value;
        var question2 = document.madlib.q2.value;
        var question3 = document.madlib.q3.value;
        var question4 = document.madlib.q4.value;
        var question5 = document.madlib.q5.value;

        if (question1 == "a") {
            console.log("Submit successful");
        }
        if (question2 == "b") {
            console.log("Submit successful");
        }
        if (question3 == "c") {
            console.log("Submit successful");
        }
        if (question4 == "d") {
            console.log("Submit successful");
        }
        if (question5 == "e") {
            console.log("Submit successful");
        }

        return false;
    }

});
