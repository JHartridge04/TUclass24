// general variables

let gameFont

let canvas
//background image
let pitch
let net
let bigW
//gameinstances
//start screen
let startScreenBool = true
//main game
let playingGameBool = false
//goal scoring opportunity
let scoringOppBool = false
//fail screen
let failGameBool = false
// fail conditions
let OOpBool = false
let BallStolenBool = false
let goalSaved = false
let winGameBool = false

//start screen variables
let startButton
// game in progress variables
let messi
let playerX
let playerY
let defender
let defenderX = []
let defenderY = []
let yrdBoxBool =false
// fail condition variable
let retryButton
//scoring opp. variables
let goalActiveBool = false
let inPostBool =false
let bCrossBarBool = false
let goalScored = false
let ball
let x1Slider
let y1Slider

let x2Slider
let y2Slider

let x3Slider
let y3Slider

let x4Slider
let y4Slider
let keepa 
let keepaX
let keepaY

let ySpeed = 5
let xSpeed = 5


function preload() {
	pitch = loadImage('pitch.jpg')
	messi = loadImage('messi2.png')
	defender = loadImage('defender1.png')
	net = loadImage('net2.jpg')
	ball = loadImage('soccerB2.png')
	keepa = loadImage('keepa3.png')
	bigW = loadImage('bigW2.jpg')
}






function setup(){
 canvas = createCanvas(windowWidth, windowHeight)
startButton = createButton('Start Game')
retryButton = createButton('Retry Game')
gameFont = loadFont('fGameText.ttf')
playerX = 50
playerY = windowHeight/2
ballX = windowWidth/2-45
ballY = windowHeight/2+250
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
//main drawing

function draw() {
	textFont(gameFont)
	background(pitch)
	imageMode(CORNERS)
	hideS()
	if (startScreenBool == true){
		startingScreen()
	}
	if(playingGameBool == true){
		playingGame()
		imageMode(CENTER)
		image(messi, playerX, playerY, 70, 70)
		shmoovement()
		if(yrdBoxBool = true){
		chanceCon()
	}
		failCons()
		
		opposition()
		//dMoove()
	}
	if (failGameBool == true && OOpBool == true){
		background(pitch)
		text('Oops!. You ran out of play.', windowWidth/2, 100 )
		text('Press retry to try again', windowWidth/2, 200)
	} 
	if(failGameBool == true && BallStolenBool == true){
		text('Unlucky! The Ball was stolen from you.', windowWidth/2, 100 )
		text('Press retry to try again', windowWidth/2, 200)
	} else if(failGameBool == true && goalSaved == true){
		background(pitch)
		textAlign(CENTER)
		text('Unlucky! Your shot was saved.', windowWidth/2, 100 )
		text('Press retry to try again', windowWidth/2, 200)
	}
	if (scoringOppBool == true){
		background(net)
		shoot()
		showS()
	
	}
	if(winGameBool == true){
		scoringOppBool = false
	imageMode(CORNERS)
    background(bigW)
    textSize(50)
    fill(255)
    textAlign(CENTER)
    text('You have Won', windowWidth/2, 300)
     //winscreen()
  }



}

//start screen
function startingScreen(){
	startScreenBool = true 
	failGameBool = false
	OOpBool =false
	BallStolenBool =false
  	playingGameBool = false
  	scoringOppBool = false
  	goalSaved = false
  	startButton.show()
	retryButton.hide()
	playerX = 50
	playerY = windowHeight/2
	background(pitch)
	textSize(20)
	textAlign(CENTER)
	fill(255, 215, 0)
	text('Hello Player! Try to get to opposite side of the pitch and score a goal!', windowWidth/2, 100) 
	textSize(25)
	text('Make sure to avoid the opposing team!',windowWidth/2, 200)
 	textSize(30)
 	fill(255, 215, 0)
 	text('Press "Start" to begin the game. Good Luck!!', windowWidth/2, 300)
 	startButton.position(windowWidth/2-115, 500)
	startButton.mousePressed(playingGame)
}
// active game paying 
function playingGame() {
	startScreenBool = false
	failGameBool = false
	OOpBool =false
	BallStolenBool =false
	scoringOppBool =false 
  	playingGameBool = true
  	goalSaved = false
	startButton.hide()
	retryButton.hide()
	background(pitch)
	textSize(20)
	fill(255, 215, 0)
	text('Press "p" to shoot' , windowWidth/3, 100)
}
//player movement controls
function shmoovement() {
  if (keyIsDown(UP_ARROW) === true ) {
    playerY = playerY - 7;
  } else if (keyIsDown(DOWN_ARROW) === true ) {
   playerY = playerY + 7;
  }
  if (keyIsDown(LEFT_ARROW) === true ) {
    playerX = playerX - 7;
  } else if (keyIsDown(RIGHT_ARROW) === true) {
    playerX = playerX + 7;
  }
  
}


//defender random spawn
function opposition(){

	for(let i =0; i<=9; i++){
		//intial defender spawn
		image(defender, defenderX[i], defenderY[i], 70, 70)
		//distance func
		OpenSpaceDist = dist(playerX, playerY, defenderX[i], defenderY[i])
// distance fail condition
 if (OpenSpaceDist < 30){
	failGameBool = true
	BallStolenBool =true 
	playingGameBool = false
	retryButton.show()
	retryButton.position(windowWidth/2-115, 500)
	retryButton.mousePressed(startingScreen)
		}
		//random spawn point func
	defenderX.push(random(267, windowWidth-267))
	defenderY.push(random(100, windowHeight-100))
	// caps array length at 10
	if(defenderX.length>10){
		defenderX.splice(defenderX.length-1, 1)
		defenderY.splice(defenderY.length-1, 1)


		}
	}
	
}


// fail conditions
function failCons (){



	if (playerY <= -30 || playerY >= 660){
		failGameBool = true
		OOpBool = true
		playingGameBool = false
		retryButton.show()
		retryButton.position(windowWidth/2-115, 500)
		retryButton.mousePressed(startingScreen)
	} else if (playerX <= 30){
		failGameBool = true
		OOpBool = true
		playingGameBool = false	
		retryButton.show()
		retryButton.position(windowWidth/2-115, 500)
		retryButton.mousePressed(startingScreen)
	} else if(yrdBoxBool == false && playerX >= windowWidth-90){
		failGameBool = true
		OOpBool = true
		playingGameBool = false
		retryButton.show()
		retryButton.position(windowWidth/2-115, 500)
		retryButton.mousePressed(startingScreen)
	}

}
// player enters the 18yrd box and has a chance to shoot
function chanceCon(){
	if(playerY  >=115 && playerY <=525  ){
		yrdBoxBool = true
	} else{
		yrdBoxBool = false
	}
	if (playerX >= windowWidth-267 && yrdBoxBool == true){
		scoringOppBool = true 
		playingGameBool =false 
	}
}


//shooting mechanism
function shoot() {
	imageMode(CORNERS)
  background(net)
  // Set the coordinates for the curve's anchor and control points.
  textSize(20)
  textAlign(LEFT)
  //text('x1 slider', 30, 40)
  //text('y1 slider', 270, 40)
  text('Use the sliders to aim your shot')
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
    t = .5 * sin(frameCount * 0.03) + 0.5;;
  let ballx = curvePoint(x1, x2, x3, x4, t);
  let bally = curvePoint(y1, y2, y3, y4, t);
    fill(255);
    // Draw the circle.
  imageMode(CENTER)
  image(ball, ballx, bally, 40, 40);
if (key === 'k'){
  goallie()
}

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
  		failGameBool = true
		goalSaved = true
		playingGameBool = false
		scoringOppBool = false
		retryButton.show()
		retryButton.position(windowWidth/2-115, 500)
		retryButton.mousePressed(startingScreen)
    }
 }


if (scoringOppBool == true){
  goallie()
  goalActiveBool = true
  if(goalActiveBool == true){
    hatTrick()
    whatASave()
  }
}


}

function goallie(){
  image(keepa, keepaX, keepaY, 200, 300)
  keepaX = keepaX + xSpeed
  if(keepaX >= 980 || keepaX <= 560){
    xSpeed = xSpeed * -1
  }
 }

 function hideS(){
	x1Slider.hide();
	y1Slider.hide();
 	x2Slider.hide();
 	y2Slider.hide();
  	x4Slider.hide();
  	y4Slider.hide();
 }

 function showS() {
 	x1Slider.show();
	y1Slider.show();
 	x2Slider.show();
 	y2Slider.show();
  	x4Slider.show();
  	y4Slider.show();
 	}

function windowResize(){
	resizeCanvas(windowWidth, windowHeight)
}