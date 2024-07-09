//flex array/ adding into an array
let furby
let x = []
let y = []


function preload() {
	furby = loadImage('furby.png')
}

function setup() {
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)
}



function draw(){
	background( 230, 130, 30)
	for(let i =0; i<x.length; i++){
		image(furby, x[i], y[i], 30, 30)
	}
}

function mouseClicked(){
	x.push(mouseX)
	y.push(mouseY)
}

function keyPressed(){
	if(key === 'x'){
		x.splice(x.length-1, 1)
		y.splice(y.length-1, 1)
	}
}