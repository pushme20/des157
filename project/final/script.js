document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // var slideSource = document.getElementById('slideSource');
    //
    // document.getElementById('handle').onclick = function(){
    //     slideSource.classList.toggle('fade');
    // }
    var slideSource = document.getElementById('slideSource');
    var handle = document.getElementById('handle');

    var questionTwo = document.getElementById('questionTwo');
    questionTwo.addEventListener('click', chColor);

    function chColor() {
        document.getElementById('secondQ').style.backgroundColor = "yellow";
    }
    // handle.addEventListener('click', function(){
    //   slideSource.classList.toggle('fade');
    // });
});
