img="";

status="";

objects=[];

function preload(){
    img=loadImage('bedroom.jpg');
}

function setup(){
    canvas=CreateCanvas(320,320);
    canvas.center;
    objectDetetor=ml5.objectDetcetor('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }

    console.log(results);
    objects=results;
}

function draw(){
    image(img,0,0,320,320);
    
    if(status != ""){
    for(i = 0; i < objects.length; i++){
        percent=floor(objects[i].confidence*100);
        document.getElementById("status").innerHTML="status:object detected";
        Text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        Fill("#FF0000");
        nofill();
        stroke("#8B0000");
        rect(objects[i].x+objects[i].y+objects[i].width+objects[i].height);
        }
    }
}
