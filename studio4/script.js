document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var flag1 = document.getElementById('center-button');
    var me = document.getElementById('hide-left');
    var flag3 = document.getElementById('hide-right');
    var showControls = document.getElementById('hide-sound');

    /*EASTER EGG INDICATORS*/
    var right_easter = document.getElementById('left-easter');
    var left_easter = document.getElementById('right-easter');
    var top_easter = document.getElementById('top-easter');
    var bot_easter = document.getElementById('bot-easter');

    var Timer;

    flag1.addEventListener('click', playAudio);
    flag1.addEventListener('mouseover', noteOn);
    flag1.addEventListener('mouseout', noteOff);

    flag3.addEventListener('click', easterEgg);

    right_easter.addEventListener('dblclick', changeTo3);

    function changeTo3() {
        return right_easter.innerHTML = "3";
    }

    function noteOn() {
        return flag3.style.visibility = 'visible';
    }


    function noteOff() {
        return flag3.style.visibility = 'hidden';
    }

    function easterEgg() {

        return flag3.style.visibility = 'visible';
    }

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
