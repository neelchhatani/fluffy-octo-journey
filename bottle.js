status_cocossd = "";
img1 = "";
function preload(){
img1 = loadImage('bottle.jpeg');
}
function setup(){
canvas = createCanvas(640 , 420);
canvas.center();
object_detecter_1 = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}
function draw(){
image(img1 , 0 , 0 , 640 , 420);
}
function modelLoaded(){
console.log("cocossd is intialized");
status_1neel = true;
object_detecter.detect(img , gotResult);
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
}