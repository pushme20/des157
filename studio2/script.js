// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.gameshow.onsubmit = processForm;
    var field1 = document.gameshow.field1.value;
    var field2 = document.gameshow.field2.value;
    var field3 = document.gameshow.field3.value;
    var field4 = document.gameshow.field4.value;
    var field5 = document.gameshow.field5.value;
    var field6 = document.gameshow.field6.value;

    function processForm() {



        // var reset = document.getElementById("reset_button").value;


        // } else {
        //     document.getElementById('hide-regis').style.visibility = "visible";
        //     var addClass = document.getElementById('regis-pic');
        //     addClass.classList.add("spinning-regis");
        // }

        // if (reset) {
        //     reset_me();
        // }
        // if (reset) {
        //     document.getElementById('hide-regis').style.visibility = "hidden";
        //     var removeClass = document.getElementById('regis-pic');
        //     removeClass.classList.remove("spinning-regis");
        // }




        return false;
    }

    document.getElementById('submit_button').onclick = function() {
        if (field1 == "" && field2 == "" && field3 == "" && field4 == "" && field5 == "" && field6 == "") {
            alert("If you would like to play, please fill out all fields of the form.");
        } else if (field1 == "" || field2 == "" || field3 == "" || field4 == "" || field5 == "" || field6 == "") {
            alert("You cannot play while there are empty fields.");
        } else {
            document.getElementById('hide-regis').style.visibility = "visible";
            var addClass = document.getElementById('regis-pic');
            addClass.classList.add("spinning-regis");
        }
    };

    document.getElementById('reset_button').onclick = function() {
        document.getElementById('hide-regis').style.visibility = "hidden";
        var removeClass = document.getElementById('regis-pic');
        removeClass.classList.remove("spinning-regis");
    };

});
