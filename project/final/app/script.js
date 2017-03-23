// document.addEventListener("DOMContentLoaded", function(event) {
$(document).ready(function() {
    console.log("DOM fully loaded and parsed");

    $("#firstQ").hide();
    // $("#content1").hide();


    $("#questionOne").click(function() {
        $("#firstQ").show("200");
        $("#content1").html("To develop  awareness and empower people to learn about each other. This site is designed to foster exploration, growth, and a welcoming community for all types of individuals.");
    });

    $("#questionTwo").click(function() {
        $("#firstQ").show("200");
        $("#content1").html("Click the logo in the upper right hand corner to be taken to the main menu. You may then select 'Explore' or 'Discover' to decide which culture you wish to learn about. 'Explore' is meant for those who are unsure of where to begin. Start there for a more wholesome experience!");
    });

    $("#questionThree").click(function() {
        $("#firstQ").show("200");
        $("#content1").html("questionThis is the second question questionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second question");
    });
});
