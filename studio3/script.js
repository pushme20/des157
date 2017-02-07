document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var first_img = document.getElementById('first-img');
    var second_img = document.getElementById('second-img');
    var third_img = document.getElementById('third-img');
    var fourth_img = document.getElementById('fourth-img');
    var fifth_img = document.getElementById('fifth-img');


    // first_img.addEventListener('mouseup', showText);
    first_img.addEventListener('mouseover', mouseWentIn1);
    first_img.addEventListener('mouseout', mouseWentOut1);

    second_img.addEventListener('mouseover', mouseWentIn2);
    second_img.addEventListener('mouseout', mouseWentOut2);

    third_img.addEventListener('mouseover', mouseWentIn3);
    third_img.addEventListener('mouseout', mouseWentOut3);

    fourth_img.addEventListener('mouseover', mouseWentIn4);
    fourth_img.addEventListener('mouseout', mouseWentOut4);

    fifth_img.addEventListener('mouseover', mouseWentIn5);
    fifth_img.addEventListener('mouseout', mouseWentOut5);


    first_img.addEventListener('click', function() {
        document.getElementById('msg1').style.visibility = "visible";
    });

    // second_img.addEventListener('click', function() {
    //     document.getElementById('msg2').style.visibility = "visible";
    // });
    //
    // third_img.addEventListener('click', function() {
    //     document.getElementById('msg1').style.visibility = "visible";
    // });
    //
    // fourth_img.addEventListener('click', function() {
    //     document.getElementById('msg1').style.visibility = "visible";
    // });
    //
    // fifth_img.addEventListener('click', function() {
    //     document.getElementById('msg1').style.visibility = "visible";
    // });



    function mouseWentIn1() {
        first_img.style.opacity = 0.5;
        first_img.src = "calcium_pills_ps_compressor.jpg";
    }

    function mouseWentOut1() {
        first_img.style.opacity = 1;
        first_img.src = "calcium_pills_ps_compressor.jpg";
    }

    function mouseWentIn2() {
        second_img.style.opacity = 0.5;
        second_img.src = "weights_ps_compressor.jpg";
    }

    function mouseWentOut2() {
        second_img.style.opacity = 1;
        second_img.src = "weights_ps_compressor.jpg";
        // first_img.innerHTML = "Did it work?";
    }

    function mouseWentIn3() {
        third_img.style.opacity = 0.5;
        third_img.src = "nike_shoe_ps_compressor.jpg";
    }

    function mouseWentOut3() {
        third_img.style.opacity = 1;
        third_img.src = "nike_shoe_ps_compressor.jpg";
    }

    function mouseWentIn4() {
        fourth_img.style.opacity = 0.5;
        fourth_img.src = "foam_roller_ps_compressor_vert.jpg";
    }

    function mouseWentOut4() {
        fourth_img.style.opacity = 1;
        fourth_img.src = "foam_roller_ps_compressor_vert.jpg";

    }

    function mouseWentIn5() {
        fifth_img.style.opacity = 0.5;
        fifth_img.src = "workout_gear_ps_compressor.jpg";
    }

    function mouseWentOut5() {
        fifth_img.style.opacity = 1;
        fifth_img.src = "workout_gear_ps_compressor.jpg";

    }
});
