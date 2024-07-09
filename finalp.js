// general variables

let gameFont

let canvas
//background image
let pitch

//gameinstances
let startScreenBool = true
let playingGameBool = false
let failGameBool = false
let winGameBool = false

//start screen variables
let startButton
// game in progress variables
let messi
let playerX
let playerY


function preload() {
	pitch = loadImage('pitch.jpg')
	messi = loadImage('messi2.png')
}






function setup(){
 canvas = createCanvas(windowWidth, windowHeight)
startButton = createButton('Start Game')
gameFont = loadFont('fGameText.ttf')
playerX = 50
playerY = windowHeight/2
}


function draw() {
	textFont(gameFont)
	if (startScreenBool == true){
		startingScreen()
	}
	if(playingGameBool == true){
		playingGame()
		image(messi, playerX, playerY, 50, 50)
	}
}


function startingScreen(){
	background(pitch)
	textSize(20)
	fill(255, 215, 0)
	text('Hello Player! Try to get to opposite side of the pitch and score a goal!', 50, 100) 
	textSize(25)
	text('Make sure to avoid the opposing team!',320, 200)
 	textSize(30)
 	fill(255, 215, 0)
 	text('Press "Start" to begin the game. Good Luck!!', 120, 300)
 	startButton.position(windowWidth/2-115, 500)
	startButton.mousePressed(playingGame)
}

function playingGame() {
	startScreenBool = false
  	playingGameBool = true
	startButton.hide()
	background(pitch)
	textSize(20)
	fill(255, 215, 0)
	text('Press "p" to shoot' , 100, 100)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    playerY = playerY - 20;
  } else if (keyCode === DOWN_ARROW) {
   playerY = playerY + 20;
  }
  if (keyCode === LEFT_ARROW) {
    playerX = playerX - 15;
  } else if (keyCode === RIGHT_ARROW) {
    playerX = playerX + 15;
  }
  
}

function windowResize(){
	resizeCanvas(windowWidth, windowHeight)
}