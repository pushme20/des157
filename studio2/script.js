// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.gameshow.onsubmit = processForm;

    function processForm() {
        var field1 = document.gameshow.field1.value;
        var field2 = document.gameshow.field2.value;
        var field3 = document.gameshow.field3.value;
        var field4 = document.gameshow.field4.value;
        var field5 = document.gameshow.field5.value;
        var field6 = document.gameshow.field6.value;

        // document.getElementById('hide-regis').style.visibility = "hidden";
        // var show_gameshow = document.GetElementById('hide-regis').style.visibility;

        if (field1 == "" && field2 == "" && field3 == "" && field4 == "" && field5 == "" && field6 == "") {
            alert("If you would like to play, please fill out all fields of the form.");
        } else if (field1 == "" || field2 == "" || field3 == "" || field4 == "" || field5 == "" || field6 == "") {
            alert("You cannot play while there are empty fields.");
        } else {
            document.getElementById('hide-regis').style.visibility = "visible";
        }
        return false;
    }
});
