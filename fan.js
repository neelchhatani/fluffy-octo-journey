img2 = "";
function preload(){
img2 = loadImage('fan.jpeg');
}
function setup(){
canvas = createCanvas(640 , 420);
canvas.center();
}
function draw(){
image(img2 , 0 , 0 , 640 , 420);
}