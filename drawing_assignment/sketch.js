var x = 0;
var y = 0;

function setup() {
  createCanvas (1080, 720);
  c = color(255);
  stroke(255, 120, 50, 255);
  fill(255, 240);
  x = random(width);
  y = random(height);
}

function draw() {
  fill(255);
  text('Press the Q, W, E, R, T, or U key to change BG Color', 275, 25);
  fill(110, 200, 150);
  rect(x, y, 50, 50);
  line(x, y, 640, 640);
  var dx = mouseX-x;
  var dy = mouseY-y;
  x = x + random(0, 0.5)*dx + random(-20, 20);
  y = y + random(0, 0.5)*dy + random(-20, 20);
  if(x>width) x = 0;
  if(y>height) y = 0;
  if(x<0) x=width;
  if(y<0) y=height;
}

function mousePressed() {
  clear();
}

function keyPressed()
{
    // Q key
  if(key == 'Q' || key == 'q')
  {
    c = color(255, 102, 120);
  }
 
  // W key
  if(key == 'W' || key == 'w')
  {
    c = color(50, 230, 244);
  }
  
  // E key
  if(key == 'E' || key == 'e')
  {
    c = color(104, 100, 255);
  }
  
  // R key
  if(key == 'R' || key == 'r')
  {
    c = color(123, 20, 15);
  }
  
  // T key
  if(key == 'T' || key == 't')
  {
    c = color(50, 214, 6);
  }
  
  // Y key
  if(key == 'Y' || key == 'y')
  {
    c = color(225, 160, 70);
  }
  
  // U key
  if(key == 'U' || key == 'u')
  {
    c = color(15, 80, 170);
  }
  
  // I key
  if(key == 'I' || key == 'i')
  {
    c = color(35, 50, 70);
  }
  
  background(c);
  x = random(width);
  y = random(height);
  
  
}