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
        var count = 0;
        if (question1 == "Yesterday") {
            count++;


        }
        if (question2 == "b") {
            count++;

        }
        if (question3 == "c") {
            count++;

        }
        if (question4 == "d") {
            count++;

        }
        if (question5 == "e") {
            count++;
        }

        if (count < 4) {
            innerHTML
            console.log("Sorry, looks like you're a Beetle!");
        }
        return false;
    }

});
