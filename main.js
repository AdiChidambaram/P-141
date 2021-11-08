rwX = 0;
rwY = 0;
scorerightwrist = "";

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    pn = ml5.poseNet(video, modelLoaded);
    pn.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);

    fill("#006eff");
    stroke("#006eff");
    circle(rwX, rwY, 20);
}

function modelLoaded() {
	console.log("Model Loaded");
}

function gotPoses(results) {
	if (results.length>0) {
		console.log(results);
        
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("Score of right wrist = "+scorerightwrist);
        
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right Wrist x cordinates = "+rightWristX);
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist y cordinates = "+rightWristY);
	}
}