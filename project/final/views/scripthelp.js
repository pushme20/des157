document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    

    // document.getElementById('handle').onclick = function(){
    //     slideSource.classList.toggle('fade');
    // }
    var slideSource = document.getElementById('slideSource');
var handle = document.getElementById('handle');
handle.addEventListener('click', function(){
  slideSource.classList.toggle('fade');
});
  });
