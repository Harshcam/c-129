song = "";
leftWristX = 0;
lefttWristY= 0;

rightWristX = 0;
rightWristy = 0;

function preload()
{
song = loudSound("music.mp3");

}

function  setup(){
canvas = createCanvas(600,500);
 canvas.center();

 video = createCanvas(VIDEO);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
    poseNet.on('pose' , gotposes);
}


    
function draw() {
    image(video, 0 , 0, 600, 500);
}


function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function gotposes(results) {
    if(result.lenth > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWristX.y;
        console.log("leftWristX = " + lefttWristX  + "leftWristY = " + lefttWristY);

    rightWristX = results[0].pose.rightWristX.x;
    rightWristY = results[0].pose.rightWristX.y;
    console.log("rightWristX = " + lefttWristX  + "rightWristY = " + righttWristY);
    }
}