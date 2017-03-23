// document.addEventListener("DOMContentLoaded", function(event) {
$(document).ready(function() {


    console.log("DOM fully loaded and parsed");

    // var slideSource = document.getElementById('slideSource');
    //
    // document.getElementById('handle').onclick = function(){
    //     slideSource.classList.toggle('fade');
    // }
    // var slideSource = document.getElementById('slideSource');
    // var handle = document.getElementById('handle');

    // var questionTwo = document.getElementById('questionTwo');
    // questionTwo.addEventListener('click', chColor);
    //
    // function chColor() {
    //     document.body.style.backgroundColor = "red";
    // }
    // handle.addEventListener('click', function(){
    //   slideSource.classList.toggle('fade');
    // });
    // var blackColor = "#000";
    $("#firstQ").hide();
    $("#questionOne").click(function() {
        $("#firstQ").show("600");

        $("#content1").html("questionThis is the first question This is the first question This is the first questionThis is the first question questionThis is the first question This is the first question This is the first questionThis is the first question");
        // $("#content1").fadeToggle("slow", function() {
        //     // Animation complete
        // });
        // $("#content2").fadeOut("slow", function() {
        //     // Animation complete
        // });


    });

    $("#questionTwo").click(function() {

        $("#content1").html("questionThis is the second question questionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second question");
        // $("#secondQ").fadeToggle("slow", function() {
        //     // Animation complete
        // });

        // $("#content1").fadeOut("slow", function() {
        //     // Animation complete
        // });




    });

    // $("#questionOne").click(function() {
    //     $("p").fadeOut("slow", function() {
    //         // Animation complete
    //     });
    //
    //
    // });
    // var slideSource = document.getElementById('slideSource');
    // var handle = document.getElementById('handle');
    // handle.addEventListener('click', function() {
    //     slideSource.classList.toggle('fade');
    // });
    // document.getElementById('handle').onclick = function(){
    //     slideSource.classList.toggle('fade');
    // }

    // var slideSource2 = document.getElementById('slideSource2');
    //
    // document.getElementById('handle2').onclick = function() {
    //     slideSource2.classList.toggle('fade');
    // }
    //
    // var slideSource3 = document.getElementById('slideSource3');
    //
    // document.getElementById('handle3').onclick = function() {
    //     slideSource3.classList.toggle('fade');
    // }
});
