status="";
objects=[];

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
	if(status!=""){
	for(i=0;i<objects.length;i++){
		objectDetector.detect(video, gotResult);
		random_r=random(255);
		random_g=random(255);
		random_b=random(255);
		document.getElementById("status").innerHTML="status:objects detected";
		document.getElementById("number_of_objects").innerHTML="Number of Objects Detected are:"+objects.length;
		fill(r, g, b);
		percent=floor(objects[i].confidence*100);
		text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
		noFill();
		stroke(r, g, b);
		rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
		if(objects[i].label == object_name){
	video.stop();
	objectDetector.detect(gotResult);
	docuent.getElementById("object_status").innerHTML = object_name + " Found";
	synth = window.speechSynthesis;
	utterThis = new SpeechSynthesisUtterance(object_name + "Found");
	synth.speak(utterThis);
	}
	else{
		document.getElementById("object_status").innerHTML = object_name + " Not Found";
	}
	}
	}
	
}

function gotResult(error, results){
	if(error){
		console.log(error);
	}
	else{
		console.log(results);
		objects=results;
	}
}