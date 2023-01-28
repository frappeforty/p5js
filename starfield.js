let stars = []; // array to hold all stars

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 400; i++) {
    stars[i] = new Star(); // create and add a new star to the array
  }
}

function draw() {
  background(0); // set the background to black
  translate(width/2, height/2); // move the origin to the center of the canvas
  for (let i = 0; i < stars.length; i++) {
    stars[i].update(); // update the position of the current star
    stars[i].show(); // display the current star
  }
  noStroke();
  fill(255); // added a black rectangle behind the text
  rect(-110, -40, 230, 60);
  fill(51);
  textSize(32);
  textAlign(CENTER);
  text("Frappe Forty", 0, 0);
}

class Star {
  constructor() {
    this.x = random(-width, width); // set a random x position for the star
    this.y = random(-height, height); // set a random y position for the star
    this.z = random(width); // set a random z position for the star
    this.pz = this.z; // set the previous z position to the current z position
  }
  
  update() {
    this.z = this.z - 4; // decrement the z position of the star
    if (this.z < 1) {
      this.z = width; // if the star is out of the screen, set its z position to the width of the screen
      this.x = random(-width, width); // set a new random x position for the star
      this.y = random(-height, height); // set a new random y position for the star
      this.pz = this.z; // set the previous z position to the current z position
    }
  }
  
  show() {
    fill(255); // set the fill color to white
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width); // calculate the x position of the star on the canvas
    let sy = map(this.y / this.z, 0, 1, 0, height); // calculate the y position of the star on the canvas
  
    let r = map(this.z, 0, width, 16, 0); // calculate the size of the star
    ellipse(sx, sy, r, r); // draw the star
  
    let px = map(this.x / this.pz, 0, 1, 0, width); // calculate the previous x position of the star on the canvas
    let py = map(this.y / this.pz, 0, 1, 0, height); // calculate the previous y position of the star on the canvas
    this.pz = this.z; // update the previous z position to the current z position
  
    stroke(255); // set the stroke color to white
    line(px, py, sx, sy); // draw a line connecting the current and previous positions of the star
  }
}

