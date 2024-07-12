let ball
let x1Slider
let y1Slider

let x2Slider
let y2Slider

let x3Slider
let y3Slider

let x4Slider
let y4Slider

let speedSlider
let net
let keepa 
let keepaX
let keepaY

let ySpeed = 3
let xSpeed = 3
let goalActiveBool = false
let inPostBool =false
let bCrossBarBool = false
let goalScored = false
let winGameBool = false

function preload(){
ball = loadImage('soccerB2.png')
net = loadImage('net2.jpg')
keepa = loadImage('keepa3.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  describe('A black curve on a gray square. A white circle moves back and forth along the curve.');
  
  x1Slider = createSlider (0, windowWidth, 50, 10)
  y1Slider = createSlider (0, windowHeight, 260, 10)
  x2Slider = createSlider (520, 1020, 730, 10)
  y2Slider = createSlider (270, 480, 240, 10)
  //x3Slider = createSlider (0, windowWidth, 730, 10)
  //y3Slider = createSlider (0, windowHeight, 610, 10)
  x4Slider = createSlider (0, windowWidth, 150, 10)
  y4Slider = createSlider (0, windowHeight, 650, 10)
  keepaX = 770
  keepaY = 380


}

function draw() {
  imageMode(CORNERS)
  background(net)
  // Set the coordinates for the curve's anchor and control points.
  textSize(20)
  text('x1 slider', 30, 40)
  text('y1 slider', 170, 40)
  let x1 = x1Slider.value();
  let y1 = y1Slider.value();
  let x2 = x2Slider.value();
  let y2 = y2Slider.value();
  let x3 = windowWidth/2;
  let y3 = 690;
  let x4 = x4Slider.value();
  let y4 = y4Slider.value();

  // Draw the curve.
  noFill();
  strokeWeight(5)
  curve(x1, y1, x2, y2, x3, y3, x4, y4);
  // Calculate the circle's coordinates.
  fill(255);
  imageMode(CENTER)
    t = .5 * sin(frameCount * 0.02) + 0.5;;
  let ballx = curvePoint(x1, x2, x3, x4, t);
  let bally = curvePoint(y1, y2, y3, y4, t);
    fill(255);
    // Draw the circle.
  imageMode(CENTER)
  image(ball, ballx, bally, 40, 40);
  print(bally)

function hatTrick(){                 
    if(ballx>= 560  && ballx<= 980  ){
      inPostBool = true
    }  
    if(bally >= 180 && bally<= 400){
      bCrossBarBool = true
    }

  if (inPostBool == true && bCrossBarBool == true){
    winGameBool = true
  }
  
  }

function whatASave() {
   ballDist = dist(ballx, bally, keepaX, keepaY)
// distance fail condition
 if (ballDist < 80){
  background(20)
    textSize(50)
    text('You suck bitch', 300, 300)
    }
 }

if (key === 'k'){
  goallie()
  goalActiveBool = true
  if(goalActiveBool == true){
    hatTrick()
    whatASave()
  }
  if(winGameBool == true){
    background(20)
    textSize(50)
    text('You win bitch', 300, 300)
     //winscreen()
  }
}
  
}
  
 function goallie(){
  image(keepa, keepaX, keepaY, 200, 300)
  keepaX = keepaX + xSpeed
  if(keepaX >= 980 || keepaX <= 460){
    xSpeed = xSpeed * -1
  }
 }

 

 





