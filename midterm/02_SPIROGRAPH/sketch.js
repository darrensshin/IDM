// SPIROGRAPH
// http://en.wikipedia.org/wiki/Spirograph
// also (for inspiration):
// http://ensign.editme.com/t43dances
//
// this p5 sketch uses simple transformations to create a
// Spirograph-like effect with interlocking circles (called sines).  
// press the spacebar to switch between tracing and
// showing the underlying geometry.
//
// your tasks:
// (1) tweak the code to change the simulation so that it draws something you like.
// hint: you can change the underlying system, the way it gets traced when you hit the space bar,
// or both.  try to change *both*.  :)
// (2) use p5.sound or tone.js to make the simulation MAKE SOUND.
// hint: the websites for p5.sound and tone.js have lots of examples.
// try and adapt them.
// another hint: javascript isn't super efficient with a large number of audio playing at once.
// see if there's a simple way to get an effective sound, or limit the number of shapes
// you're working with.

var NUMSINES = 10; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var ratio = 0.6; // what multiplier for speed is each additional sine?
var alpha = 50; // how opaque is the tracing system

var trace = false; // are we tracing?

var osc, fft;
var playing = false;

function preload() {
  dontdoit = loadSound("assets/dontdoit.mp3")
}

function setup() {
  createCanvas(800, 600); // OpenGL mode
  
  osc = new p5.TriOsc();
  osc.amp(.5);

  fft = new p5.FFT
  osc.amp(0);
  osc.start();
  
  rad = height/4; // compute radius for central circle
  background(255, 240, 120, 10); // clear the screen

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw()
{
  if (!trace) {
    background(120, 210, 190, 180); // clear screen if showing geometry
    stroke(255); // black pen
    fill(random(255), random(100), random(255), random(255, 120, 160, 80)); // don't fill
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (i = 0; i<sines.length; i++) // go through all the sines
  {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(100, 210, 150, 80); // blue
      fill(70, 100, 255, 120); // also, um, blue
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) rect(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) rect(100, 100, 5, 5); // draw a little circle
    if (trace) rect(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
  }
    if (!playing) {
      osc.amp(0.5, 0.05);
      playing = true;
    } else {
      osc.amp(0, 0.5);
      playing = false;
    }
}

function keyReleased()
{
  if (key==' ') {
    trace = !trace;
    dontdoit.setVolume(5);
    dontdoit.play();
    background(255,20,100,230);
  }
}