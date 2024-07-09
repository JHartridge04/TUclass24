
let capture




function setup(){
	createCanvas(windowWidth, windowHeight)
	capture = createCapture(VIDEO)
	capture.size(420, 340)
	capture.hide()
}

function draw(){
	image(capture, mouseX, mouseY)
}