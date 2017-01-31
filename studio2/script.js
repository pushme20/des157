// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.gameshow.onsubmit = processForm;



    function processForm() {

        // var field1 = document.gameshow.field1.value;
        // var field2 = document.gameshow.field2.value;
        // var field3 = document.gameshow.field3.value;
        // var field4 = document.gameshow.field4.value;
        // var field5 = document.gameshow.field5.value;
        // var field6 = document.gameshow.field6.value;


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

        var field1 = document.gameshow.field1.value;
        var field2 = document.gameshow.field2.value;
        var field3 = document.gameshow.field3.value;
        var field4 = document.gameshow.field4.value;
        var field5 = document.gameshow.field5.value;
        var field6 = document.gameshow.field6.value;

        var inp1 = document.getElementById("input1");
        var inp2 = document.getElementById("input2");
        var inp3 = document.getElementById("input3");
        var inp4 = document.getElementById("input4");
        var inp5 = document.getElementById("input5");
        var inp6 = document.getElementById("input6");

        if (field1 == "" && field2 == "" && field3 == "" && field4 == "" && field5 == "" && field6 == "") {
            alert("If you would like to play, please fill out all fields of the form.");
        } else if (field1 == "" || field2 == "" || field3 == "" || field4 == "" || field5 == "" || field6 == "") {
            alert("You cannot play while there are empty fields.");
        } else {
            document.getElementById('hide-regis').style.visibility = "visible";
            var addClass = document.getElementById('regis-pic');
            addClass.classList.add("spinning-regis");

            inp1.classList.add("brown-color");
            inp1.innerHTML = field1;
            inp2.classList.add("brown-color");
            inp2.innerHTML = field2;
            inp3.classList.add("brown-color");
            inp3.innerHTML = field3;
            inp4.classList.add("brown-color");
            inp4.innerHTML = field4;
            inp5.classList.add("brown-color");
            inp5.innerHTML = field5;
            inp6.classList.add("brown-color");
            inp6.innerHTML = field6;

            // var start_audio = document.getElementById("countdown");
            // start_audio.play();
            var start_audio = document.getElementById("countdown");
            start_audio.play();

        }
    };

    document.getElementById('reset_button').onclick = function() {
        document.getElementById('hide-regis').style.visibility = "hidden";
        var removeClass = document.getElementById('regis-pic');
        removeClass.classList.remove("spinning-regis");
        // var audio = document.getElementById("countdown");


    };


});;
