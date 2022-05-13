prediction_1="";

Webcam.set({
width:300,
height:300,
image_format:"jpg",
jpg_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML= "<img id='captured_img' src='"+data_uri+"'>";
});
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1asYil1sR/model.json", modelLoaded);

function modelLoaded(){
console.log("model is loaded");
}

function speak(){
var synth=window.speechSynthesis;
speak_1="the prediction is "+prediction_1;
var utterThis=window.SpeechSynthesisUtterance(speak_1);
synth.speak(utterThis);
}