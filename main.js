difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("brown");
    document.getElementById("font_Size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#ffe787');
    text("miracle", 50, 200);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized!")
}

function gotPoses(results)
{
    if(results.length>0)
    {

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX = "+leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}