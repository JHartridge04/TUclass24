
let imgs = []

let randomButton 

let canvas 

let namesArray = ['hi', 'hello', 'hey', 'wassaup']

let name = 0
let randImg = 0

function preload(){
	for(let i= 0; i<3; i++){
		imgs[i] = loadImage('images/' +i+ '.jpg')
	}
}


function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.style('z-index', '-1')
canvas.position(0,0)
imageMode(CENTER)

randomButton=createButton('Random image')
randomButton.mousePressed(randImageName)
}

function randImageName(){
	randImg = int(random(imgs.length))
	name = int(random(namesArray.length))
}


function draw() {

image(imgs[randImg], windowWidth/2, windowHeight/2)
}