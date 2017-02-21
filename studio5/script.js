document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var explore = document.getElementById('explore');
    var about = document.getElementById('about');
    var help = document.getElementById('help');
    var content_box = document.getElementById('content_box');

    explore.addEventListener("click", showDownExplore);
    explore.addEventListener("dblclick", showUpExplore);
    about.addEventListener("click", showDownAbout);
    about.addEventListener("dblclick", showUpAbout);
    help.addEventListener("click", showDownHelp);
    help.addEventListener("dblclick", showUpHelp);

    function showDownExplore() {
        explore.innerHTML = "Explore&nbsp;&nbsp;&nbsp;&nbsp;&#9660";
        content_box.style.visibility = "hidden";
    }

    function showUpExplore() {
        explore.innerHTML = "Explore&nbsp;&nbsp;&nbsp;&nbsp;&#9654";
        content_box.style.visibility = "visible";
    }



    function showDownAbout() {
        about.innerHTML = "About&nbsp;&nbsp;&nbsp;&nbsp;&#9660";
        content_box.style.visibility = "hidden";
    }

    function showUpAbout() {
        about.innerHTML = "About &nbsp;&nbsp;&nbsp;&nbsp;&#9654";
        content_box.style.visibility = "visible";
    }

    function showDownHelp() {
        help.innerHTML = "Help&nbsp;&nbsp;&nbsp;&nbsp;&#9660";

        content_box.style.visibility = "hidden";
    }

    function showUpHelp() {
        help.innerHTML = "Help&nbsp;&nbsp;&nbsp;&nbsp;&#9654";
        content_box.style.visibility = "visible";
    }
});
