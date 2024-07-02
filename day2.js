
let furby

function preload(){
furby = loadImage('furby.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)
}

function draw(){

	if (mouseIsPressed == true) {
		background(255, 0, 0)
		image(furby, 300, 250)
	}else{
		background(0, 0, 255)
	}
		textSize(90)
	text('GTAB Ln', 300, 200)
	if(keyIsPressed == true){
		ellipse(windowWidth/2, windowHeight/2, 100, 100)
	}else{
	fill(100, 250, 120)
	rect(windowWidth/2, windowHeight/2, 100, 100)
	}
	
}