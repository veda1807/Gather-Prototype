//Global varibales
var obj = {};
var id;
let x=0;
let y=0;
let w= 500;
let h= 500;

//Function to move the avatar
function move(e){

    
    if(e.keyCode==39){
        x+=5;
    }
    if(e.keyCode==37){
        x-=5;
    }
    if(e.keyCode==38){
        y-=5;
    }
    if(e.keyCode==40){
        y+=5;
    }
    loadCanvas(id);

    //Checking  avatars in proximity
    nearby();
}


//Function to check nearby avatars
function nearby() {

    console.log(obj);
    var distance = Math.floor(Math.sqrt(Math.pow((obj["B"][0] - obj["A"][0]),2) + Math.pow((obj["B"][1] - obj["A"][1]),2) ))

    if (distance < 250) {
        console.log("Avatar nearby turn on mic and video");
    }
}


//keydown event calls move fn whenever arrow keys are pressed.
document.onkeydown=move;

//function to display the canvas
function loadCanvas(pic){

    id = pic;

    var canvas = `<canvas id="myCanvas" width="1000" height="700" style="border:1px solid #000000; background-image: url('office.png'); background-size: contain;"></canvas>`
    document.getElementById("root").innerHTML=canvas;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //required when avatar images are added
    var img1 = new Image();
    var img2 = new Image(); 
    
    var player1=pic+'.png';
    img1.src = player1;
    img2.src = '8.png';

    //Creating new images
    img1.onload = () => { 
        ctx.drawImage(img1, w, h);
        obj["A"] = [w,h];
    };
    img2.onload = () => { 
        ctx.drawImage(img2, x, y);        
        obj["B"] = [x,y];
    };
}