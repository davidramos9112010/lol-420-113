function preload()
{

}
function setup()
{
createCanvas(420,420);
video=createCapture(VIDEO);
video.size(300,300);
}
function draw()
{
fill(128,0,0);        
stroke(128,0,0);
circle(30,30,20);
circle(390,30,20);
circle(30,390,20);
circle(390,390,20);
fill(255,255,255);
stroke(0,128,128);
rect(30,30,360,360);
image(video,60,60,300,300);
}
















