document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var flag1 = document.getElementById('center-button');
    var me = document.getElementById('hide-left');
    var flag3 = document.getElementById('hide-right');
    var showControls = document.getElementById('hide-sound');

    var Timer;

    flag1.addEventListener('click', playAudio);

    function playAudio() {
        var sound = document.getElementsByTagName("audio")[0];
        // sound.load();
        sound.play()
        setTimeout(playAskTime, 9.36 * 1000); //in 5 sec run fxn
        // setTimeout(playKnowingTime, 10 * 1000);
        setTimeout(playAskTime1, 19 * 1000);
        setTimeout(playAskTime2, 23 * 1000);
        setTimeout(playAskTime3, 28 * 1000);

        setTimeout(playAskTime4, 29.2 * 1000);

        setTimeout(playAskTime5, 29.7 * 1000);
        setTimeout(playAskTime6, 37.2 * 1000);
        // showControls.style.display = "inline-block";
    }

    function playAskTime() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "red";
    }

    function playAskTime1() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "black";
    }

    function playAskTime2() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "green";
    }

    function playAskTime3() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "yellow";
    }

    function playAskTime4() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "teal";
    }

    function playAskTime5() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "maroon";
    }

    function playAskTime6() {
        var bod = document.getElementById('red');
        bod.style.backgroundColor = "cyan";
    }

    // function playKnowingTime() {
    //     var bod = document.getElementById('red');
    //     bod.style.backgroundColor = "red";
    // }
});
