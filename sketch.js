function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER);

  stroke(255)
  noFill()
  strokeWeight(2)

  var w= mouseX/10

for(var j=0;j<height/50;j++){
  for(var i=0;i<width/50;i++){
    stroke(255,0,0)
    ellipse(25+50*i,25+50*j,w)
    stroke(255,255,0)
    rect(25+50*i,25+50*j,mouseY/4)
    stroke("#3b28cc")
    ellipse(50+50*i,50+50*j,25)
  }
}
}