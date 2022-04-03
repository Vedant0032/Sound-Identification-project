function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZBPWrh3uw/models.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){

}