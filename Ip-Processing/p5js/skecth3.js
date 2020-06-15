function setup(){
	createCanvas(windowWidth,windowHeight);
}
var x = y =0;
function draw(){
	background(0,23,25);
	rotate(x);
	x++;
	ellipse(x,y,20,20);
}