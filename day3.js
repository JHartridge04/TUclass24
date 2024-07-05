function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  
  if(mouseX<175||mouseX>422){
  background (166, 154, 123);
     
     }else{
    background (166, 154, 123);
  }
  //background
  strokeWeight(600)
  stroke(55)
  line(0, 550, windowWidth, 550)
  
  strokeWeight(6)
  
  stroke(237, 226, 161)
  strokeWeight(15)
  //perpendicular lines
  line(250,250,600,600); 
  
  line(0,600,350,250);
    strokeWeight(6)
  if (mouseIsPressed == true) {
  fill(255, 0, 0)
  textSize(50)
  text ('You have made a grave mistake', 100, 100)
 }else{
   fill(213, 247, 242)
   textSize(50)
   text('Hello! I can be of assistance as long as you dont touch me!', 100, 100)
 }
  ellipse(300,300,150,150)
  //head
  rect(178,125,240,100)
  //lower body
  triangle(170,470,303,378,430,470)
  // middle point
  strokeWeight(60)
  if (mouseIsPressed == true) {
    stroke(0)
  }
    else{
    stroke(255, 255, 255)
}
  
  point(300,300)
  //mini point
  strokeWeight(30)
  
  stroke(237, 226, 161)
  
  point(300,300)
  
  //legs
  strokeWeight(15)
  line(200, 476,200,600)
  line(400, 476,400,600)
  //eyes
 ellipse(230,175,60,80)
   ellipse(365,175,60,80)
   //pupils
  stroke(0)
  point(365,175)
  point(230,175)
  //mouth/nose
  strokeWeight(3)
  fill(0)
  triangle(300, 215, 270, 185, 325, 185)
  //eyebrows
  if (mouseIsPressed == true) {
  strokeWeight(8)
  line(200,100, 280, 158)
  line(389, 100, 313, 160)
}
}