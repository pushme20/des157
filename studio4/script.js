document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var flag1 = document.getElementById('center-button');
    var me = document.getElementById('hide-left');
    var flag3 = document.getElementById('hide-right');
    var showControls = document.getElementById('hide-sound');

    var Timer;

    flag1.addEventListener('click', playAudio);

    // function playAudio() {
    //     var sound = document.getElementsByTagName("audio")[0];
    //     sound.load();
    //     sound.play()
    //
    //     showControls.style.display = "inline-block";
    //
    // }
});
