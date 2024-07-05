
let furby
let furbyX
let furbyY


let ySpeed = 3
let xSpeed = 3

let score = 0

let mouseDist

let starBool = true
let winBool = false

function preload() {
	furby = loadImage('furby.png')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	furbyX = windowWidth/2
	furbyY = windowHeight/2
	imageMode(CENTER)
}

function draw() {
	if (starBool == true){
		startGame()
	}
	if (winBool == true){
		winGame()
	}
}

function startGame() {
	background(0)
	fill(255)
	textSize(20)
	text('Hit furby to gain points! You have ' + score + ' points!', 0, 100)

	image(furby, furbyX, furbyY, 50, 50)
	
	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	furbyX = furbyX + xSpeed
	furbyY = furbyY + ySpeed
	if(furbyX >= windowWidth-25 || furbyX <= 0){
		xSpeed = xSpeed * -1
	}
	if(furbyY >= windowHeight-25 || furbyY <= 0){
		ySpeed =ySpeed * -1
	}

	if(mouseDist< 25){
		score ++
		furbyX = random(26, windowWidth-25)
		furbyY = random(26, windowHeight-25)
		ySpeed = ySpeed * 1.2
		xSpeed = xSpeed * 1.2
	}

	if(score == 20){
		startGame =false
		winGame =true
	}
}

function winGame(){
background(random(255), random(255), random(255))
fill(255)
textSize(50)
text('Congratulations! You Caught Furby!', 100, 100)
}


function windowResize(){
	resizeCanvas(windowWidth, windowHeight)
}
