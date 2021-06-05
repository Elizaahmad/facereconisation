Webcam.set({
    width:350,
    height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) 
    { 
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
});
}
console.log('ml5 version:', ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bklqSjlsF/',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}


    function gotResutlt(error,results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].lable;
            document.getElementById("result_object_Accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
    }
