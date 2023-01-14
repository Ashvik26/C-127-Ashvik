song="";
song2="";
function preload(){
song=loadSound("blinding_lights.mp3");
song2=loadSound("Imagine_dragons.mp3");
}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,500,400);
}