status="";

function preload() {

}

function modelloaded(){
		console.log("Model has been loaded.");
	status=true;
}

function start(){
	objectDetector = ml5.objectDetector('cocossd', modelloaded);
	document.getElementById("status").innerHTML="status: detecting objects";
}

function setup(){
canvas = createCanvas(500, 500);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(500, 500);
	video.hide();  
var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background("gray");
}

function draw(){
	image(video, 0 , 0, 500, 500);
}