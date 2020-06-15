function setup(){
	createCanvas(windowWidth,windowHeight);
	noStroke();
}
var x = y = a = xspeed =yspeed =0;
function draw(){
	//translate(200,200);
	background(233,20,21);
	x++;
	if (x>width) {x=0;}
	y = y + yspeed;
	yspeed+=1;
	if (y>height/2-0) {
		yspeed-=2;
	}
	
	fill(255);
	ellipse(x,y,20,20);
	print(yspeed);
}