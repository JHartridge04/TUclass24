let furby
let furbyBrushBool= false
let ellipseBrushBool = false
function preload(){

	furby = loadImage('furby.png')
}



function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	imageMode(CENTER)

}

function draw() {
	if(ellipseBrushBool == true){
	ellipseBrush()
}
	if(furbyBrushBool == true){
	furbyBrush()
}
}


	function furbyBrush(){
		image(furby, mouseX, mouseY, 50, 50)

	}

	function ellipseBrush(){
		fill(random(255), random(255), random(255))
		ellipse(mouseX, mouseY, 50, 50)
	}

	function keyPressed() {
		if (key === 'e'){
			ellipseBrushBool = true
			furbyBrushBool = false
		}
		if(key === 'f'){
			ellipseBrushBool = false
			furbyBrushBool = true
		}
		if(key === 'q'){
			ellipseBrushBool = false
			furbyBrushBool = false
		}
	}


function windowResize(){
	resizeCanvas(windowWidth, windowHeight)
}