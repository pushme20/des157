document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var first_img=document.getElementById('first-img');

    // first_img.addEventListener('mouseup', showText);
    first_img.addEventListener('mouseover', mouseWentIn);
    first_img.addEventListener('mouseout', mouseWentOut);

    function mouseWentIn() {
      first_img.style.opacity = 0.5;
      first_img.src="calcium_pills_ps_compressor.jpg";
    }
    function mouseWentOut() {
      first_img.style.opacity = 1;
      first_img.src="calcium_pills_ps_compressor.jpg";
  // first_img.innerHTML = "Did it work?";

    }











});
