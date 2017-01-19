// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
    var canvas = createCanvas(800, 250);
    canvas.parent('mySketch');
}

function draw() {
    /*american flag colors src: https://commons.wikimedia.org/wiki/File_talk:Flag_of_the_United_States.svg*/
    noStroke(); //removes outlines
    fill(191, 10, 48);
    rect(0, 0, 270, 250);
    fill(255, 255, 255);
    rect(270, 0, 250, 250);
    fill(0, 40, 104);
    rect(521, 0, 279, 250);

    if (mouseX > 0 && mouseX <= 270 && (mouseY > 0 && mouseY < 250)) {
        fill(8, 132, 84);
        rect(0, 0, 270, 250);
    } //serves as a hovering effect to change color

    if (mouseX > 270 && mouseX <= 521 && (mouseY > 0 && mouseY < 250)) {
        fill(255, 255, 255);
        rect(270, 0, 250, 250);
    }

    if (mouseX > 521 && mouseX <= 800 && (mouseY > 0 && mouseY < 250)) {
        fill(8, 132, 84);
        rect(521, 0, 279, 250);
    } //serves as a hovering effect to change color

    if (mouseIsPressed) {
        background(8, 132, 84); //green for nigeria covers left and right sides
        fill(255);
        rect(270, 0, 250, 250);
    } //change to NIG flag colors; src: https://en.wikipedia.org/wiki/Flag_of_Nigeria
} //the ellipse function brings about the illusion of concentric circles