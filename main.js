function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pJpE6L6DR/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
