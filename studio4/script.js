document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    //USED TO DOCUMENT DBLCLICK EVENTS
    var count = 0;
    var Timer;

    /*MAIN BUTTONS*/
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

    // var showControls = document.getElementById('hide-sound');

    //FUNCTIONS PLAY BASED ON EVENTS (CENTER, RIGHT, TOP, LEFT, BOTTOM)
    // center_button.addEventListener('click', playAudio);
    center_button.addEventListener('mouseover', noteOn);
    // center_button.addEventListener('mouseout', noteOff);

    right_button.addEventListener('click', showRightButton);
    right_easter.addEventListener('dblclick', changeTo3);

    top_button.addEventListener('click', showRightButton);
    top_easter.addEventListener('dblclick', changeTo12);

    left_button.addEventListener('click', showRightButton);
    left_easter.addEventListener('dblclick', changeTo9);

    bot_button.addEventListener('click', showRightButton);
    bot_easter.addEventListener('dblclick', changeTo6);


    // tt1.addEventListener('mouseover', function() {
    //     console.log('mouseover on eat');
    //     tipTimer = setTimeout(showTT1, 1000);
    // });
    //
    // tt1.addEventListener('mouseout', function() {
    //     console.log('mouseout on eat');
    //     clearTimeout(tipTimer);
    //     tt1.style.opacity = 0;
    // });
    //

    right_button.addEventListener('mouseover', function() {
        Timer = setTimeout(changeTo3, 1000);
    });

    top_button.addEventListener('mouseover', function() {
        Timer = setTimeout(changeTo12, 1000);
    });

    left_button.addEventListener('mouseover', function() {
        Timer = setTimeout(changeTo9, 1000);
    });

    bot_button.addEventListener('mouseover', function() {
        Timer = setTimeout(changeTo6, 1000);
    });

    // right_easter.addEventListener('mouseover', function() {
    //     clearTimeout(Timer);
    //     Timer = setTimeout(changeTo12, 1000);
    //
    // });


    function changeTo3() {
        count++;
        console.log(count);
        top_button.style.visibility = "visible";
        tt1.style.transition = 'all 1s';
        return right_easter.innerHTML = "The 12 will help you move forward...";
    }

    function changeTo12() {
        count++;
        console.log(count);
        left_button.style.visibility = "visible";
        return top_easter.innerHTML = "A hover is all that you need";
    }

    function changeTo9() {
        count++;
        console.log(count);
        bot_button.style.visibility = "visible";
        return left_easter.innerHTML = "You must reach the 6...";
    }

    function changeTo6() {
        count++;

        count = count - 2;
        if (count == 4) {
            changeToInf(count);
        }
        return bot_easter.innerHTML = "^^^Please listen to the following audio^^^";
    }


    function changeToInf(count) {


        playAudio();
        return center_button.innerHTML = "&infin;";

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
        sound.play()
        setTimeout(playAskTime, 9.36 * 1000); //in 5 sec run fxn
        // setTimeout(playKnowingTime, 10 * 1000);
        setTimeout(playAskTime1, 19 * 1000);
        setTimeout(playAskTime2, 23 * 1000);
        setTimeout(playAskTime3, 28 * 1000);

        setTimeout(playAskTime4, 29.2 * 1000);

        setTimeout(playAskTime5, 29.7 * 1000);
        setTimeout(playAskTime6, 37.2 * 1000);

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

});
