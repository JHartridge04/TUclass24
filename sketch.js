function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  
  if(mouseX<175||mouseX>422){
  background (166, 154, 123);
     
     }else{
    background (166, 154, 123);
  }
  strokeWeight(600)
  stroke(55)
  line(0, 550, 600, 550)
  
  strokeWeight(6)
  
  stroke(237, 226, 161)
  strokeWeight(15)
  //perpendicular lines
  line(250,250,600,600); 
  
  line(0,600,350,250);
    strokeWeight(6)

  fill(213, 247, 242)
  
  ellipse(300,300,150,150)
  
  rect(178,125,240,100)
  
  triangle(170,470,303,378,430,470)
  // middle point
  strokeWeight(60)
  
  stroke(255, 255, 255)
  
  point(300,300)
  //mini point
  strokeWeight(30)
  
  stroke(255, 213, 97)
  
  point(300,300)
  
  strokeWeight(25)
  
  stroke(237, 226, 161)

  point(mouseX, mouseY)
  strokeWeight(15)
  line(200, 476,200,600)
  line(400, 476,400,600)
 ellipse(230,175,60,80)
   ellipse(365,175,60,80)
  stroke(0)
  point(365,175)
  point(230,175)
  strokeWeight(3)
  fill(0)
  triangle(300, 215, 270, 185, 325, 185)
  strokeWeight(8)
  line(200,100, 280, 158)
  line(389, 100, 313, 160)
}