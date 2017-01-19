// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");


//function setup() {
//  var canvas = createCanvas(800, 250);
//  canvas.parent('mySketch');
//  background(90,40,240);
//}

//function draw() {
//  ellipse(mouseX, mouseY, 50,50);
//    
//}
function setup() {
    var canvas = createCanvas(800, 250);
    canvas.parent('mySketch');
    background(90, 40, 240);
}

var y = 0; //initializing variable

function draw() {

    background(0, 0, 255); //blue background
    frameRate(10); //slowed down frame rate to 10 fps

    for (int row_movement = 0; row_movement < 500; row_movement += 100) {
        for (int col_movement = 0; col_movement < 500; col_movement += 100) {
            noStroke(); //removes stroke from circles
            fill(255, 0, 0); //red ring
            ellipse(50 + row_movement, 50 + col_movement, 95, 95); //outermost ring (which gets smaller and smaller)
            fill(255, 255, 255); //white ring
            ellipse(50 + row_movement, 50 + col_movement, 85, 85);
            fill(255, 128, 0); //orange ring
            ellipse(50 + row_movement, 50 + col_movement, 75, 75);
            fill(255, 255, 255); //white ring
            ellipse(50 + row_movement, 50 + col_movement, 65, 65);
            fill(255, 255, 0); //yellow ring
            ellipse(50 + row_movement, 50 + col_movement, 55, 55);
            fill(255, 255, 255); //white ring
            ellipse(50 + row_movement, 50 + col_movement, 45, 45);
            fill(0, 255, 0); //green ring
            ellipse(50 + row_movement, 50 + col_movement, 35, 35);
            fill(255, 255, 255); //white ring
            ellipse(50 + row_movement, 50 + col_movement, 25, 25);
            fill(0, 0, 255); //blue center
            ellipse(50 + row_movement, 50 + col_movement, 15, 15);
        } //inner for loop is for column movement (y-axis)
    } //outer for loop is for row movement (x-axis)

    strokeWeight(3); //thicker stroke
    stroke(255, 255, 255); //white line
    line(0, y, 500, y); //horizontal line
    y = y + 5; //the amount of units that the line moves on the y-axis

    if (y == 50) {
        for (int row1 = 0; row1 < 450; row1 += 100) {
            fill(153, 0, 204); //purple center
            ellipse(50 + row1, 50, 15, 15); //selects the center shape within the x-y plane
        }
    } //if the line reach a certain coordinate in the x-y plane, run the for loop code. 
    //the same code structure is used for the subsequent "if-for" combinations

    if (y == 150) {
        for (int row2 = 0; row2 < 450; row2 += 100) {
            fill(153, 0, 204); //purple center
            ellipse(50 + row2, 50 + 100, 15, 15);
        }
    }

    if (y == 250) {
        for (int row3 = 0; row3 < 450; row3 += 100) {
            fill(153, 0, 204); //purple center
            ellipse(50 + row3, 50 + 200, 15, 15);
        }
    }

    if (y == 350) {
        for (int row4 = 0; row4 < 450; row4 += 100) {
            fill(153, 0, 204); //purple center
            ellipse(50 + row4, 50 + 300, 15, 15);
        }
    }

    if (y == 450) {
        for (int row5 = 0; row5 < 450; row5 += 100) {
            fill(153, 0, 204); //purple center
            ellipse(50 + row5, 50 + 400, 15, 15);
        }
    }
} //the ellipse function brings about the illusion of concentric circles