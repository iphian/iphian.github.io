function setup() {
	createCanvas(windowWidth,windowHeight);
}
var x=y=a=0;
function draw(){
	translate(windowWidth/2,windowHeight/2);
	background(20,25,30);
	x = sin(a)*150;
	y = cos(a)*150;
	a+=0.01;
	ellipse(x,y,50,50);
	print(x);
}
