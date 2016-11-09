// a font:
var thefont; 
var bg;
var y = 0;

// a phrase i want to typeset.  i've escaped the quotes:
var phrase = 'His heart beat faster and faster as Daisys white face came up to his own.\' He knew that when he kissed this girl, and forever wed his\' unutterable visions to her perishable breath, his mind would never romp again like the mind of God.\' So he waited, listening for a moment longer to the tuning fork that had been struck upon a star.\' Then he kissed her. At his lips touch she blossomed for him like a flower and the\' incarnation was complete.\'';

var phrasearray = phrase.split(' ');

// fonts are like images... they need to be loaded
// asychronously in the preload() function:
function preload()
{

  thefont = loadFont('./data/font.ttf');

}


function setup() {
  bg = loadImage("data/gatsby.jpg");
  createCanvas(655, 523);
  background(255);
  stroke(255);
  fill(100, 20, 200, 80);
  
  textFont(thefont, 40);
}

function draw() {
  background(bg);
  var margin = 20;
  var thex = margin; // start at the left
  var they = 90; // start one line down

  for(i in phrasearray) // (for i = 0;i<phrasearray.length;i++)
  {
    if(phrasearray[i]=='he')
    {
      textSize(90);
    }
    else
    {
      textSize(40);
    }
    fill(random(255), random(255));
    var tw = textWidth(phrasearray[i]+' ');
    if(thex+tw>width-margin)
    {
      thex=margin;
      they+=40;
    }
    text(phrasearray[i], thex, they);
    thex+=tw;
  }
  
}