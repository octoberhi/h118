function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
}

function preload()
{
classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
strokeWeight(13);
stroke(0);
if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function updateCanvas()
{
background("white");

}

function classifyCanvas()
{
classifier.classify(canvas,gotResult);
}

function gotResult(error, results)
{
if (error){
console.log(error);
}
console.log(results);
document.getElementById("result_label").innerHTML = results[0].label;
document.getElementById("result_Confidence").innerHTML = Math.round(results[0].confidence*100) + "%";
}

