img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function modelLoaded()
{
    console.log("model Loded");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}

function draw() 
{ 
    image(img, 0, 0, 640, 420); 
    if(status != "")
    {
        for(i = 0; i < objects.length; i ++ )
        {
            document.getElementById("status").innerHTML = "status : objectdetected";
            fill("#FF0000");
            percent = floor(objects[i].confidence = 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill(); 
            stroke("#FF0000"); 
            rect(object[i].x, object[i].y, object[i].width, object[i].height, )
        }
    }
}
