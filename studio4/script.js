document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var count = 0;
    var Timer;

    var center_button = document.getElementById('center-button');
    var left_button = document.getElementById('hide-left');
    var right_button = document.getElementById('hide-right');
    var top_button = document.getElementById('hide-top');
    var bot_button = document.getElementById('hide-bot');

    /*EASTER EGG INDICATORS*/
    var right_easter = document.getElementById('right-easter');
    var left_easter = document.getElementById('left-easter');
    var top_easter = document.getElementById('top-easter');
    var bot_easter = document.getElementById('bot-easter');

    var showControls = document.getElementById('hide-sound');


    center_button.addEventListener('click', playAudio);
    center_button.addEventListener('mouseover', noteOn);
    center_button.addEventListener('mouseout', noteOff);

    right_button.addEventListener('click', showRightButton);
    right_easter.addEventListener('dblclick', changeTo3);

    top_button.addEventListener('click', showRightButton);
    top_easter.addEventListener('dblclick', changeTo12);

    left_button.addEventListener('click', showRightButton);
    left_easter.addEventListener('dblclick', changeTo9);

    bot_button.addEventListener('click', showRightButton);
    bot_easter.addEventListener('dblclick', changeTo6);

    function changeTo3() {
        count++;
        console.log(count);
        top_button.style.visibility = "visible";
        return right_easter.innerHTML = "3";
    }

    function changeTo12() {
        count++;
        console.log(count);
        left_button.style.visibility = "visible";
        return top_easter.innerHTML = "12";
    }

    function changeTo9() {
        count++;
        console.log(count);
        bot_button.style.visibility = "visible";
        return left_easter.innerHTML = "9";
    }

    function changeTo6() {
        count++;
        console.log(count);
        return bot_easter.innerHTML = "6";
    }

    if (count == 4) {
        changeToInf();
    }

    function changeToInf() {
        return center_button.innerHTML = "Hi";
    }

    function noteOn() {
        return right_button.style.visibility = 'visible';
    }


    function noteOff() {
        return right_button.style.visibility = 'hidden';
    }

    function showRightButton() {

        return right_button.style.visibility = 'visible';
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
