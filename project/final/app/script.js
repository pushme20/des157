// document.addEventListener("DOMContentLoaded", function(event) {
$(document).ready(function() {
    console.log("DOM fully loaded and parsed");

    $("#firstQ").hide();

    $("#questionOne").click(function() {
        $("#firstQ").show("200");
        $("#content1").html("To develop cultural awareness and empower people to learn about each other. This site is designed to foster exploration, growth, and a welcoming community for all types of individuals.");
    });

    $("#questionTwo").click(function() {
        $("#content1").html("questionThis is the second question questionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second question");
    });

    $("#questionThree").click(function() {
        $("#content1").html("questionThis is the second question questionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second questionquestionThis is the second question");
    });
});
