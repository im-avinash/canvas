// straight line
var can=document.getElementById("mycanvas");
var line=can.getContext("2d");
line.moveTo(0,0);
line.lineTo(400,300);
line.stroke();

// circle
var can2= document.getElementById("mycanvas2");
var circle=can2.getContext("2d");
circle.beginPath();
circle.arc(200,150,130,0,2*Math.PI);
circle.stroke();

// text
// solid
var can3=document.getElementById("mycanvas3");
var stext=can3.getContext("2d");
stext.font="24px Arial";
stext.fillText("hello avi",100,100);
// hollow
var htext=can3.getContext("2d");
htext.font="30px Arial";
htext.strokeText("hi buddy",200,200);

// gradient
// linear gradient
var can4=document.getElementById("mycanvas4");
var gradient=can4.getContext("2d");
// create gradient
var lineargrad=gradient.createLinearGradient(0,0,400,0);
lineargrad.addColorStop(0,"red");
lineargrad.addColorStop(1,"black");

// fill rectangle
gradient.fillStyle=lineargrad;
gradient.fillRect(10,10,380,280);

// radial gradient
var can5=document.getElementById("mycanvas5");
var grad2=can5.getContext("2d");

// create gradient
var radialgrad=grad2.createRadialGradient(200,150,20,200,150,200);
radialgrad.addColorStop(0,"red");
radialgrad.addColorStop(.5,"black");
radialgrad.addColorStop(1,"yellow")
// fill rectangle
grad2.fillStyle=radialgrad;
grad2.fillRect(10,10,380,280);

// image gradient
// var can6=document.getElementById("mycanvas6");
// var imggrad=can6.getContext("2d");
// var img=document.getElementById("imgname");
// imggrad.drawImage(img,10,10);

// ellipse or oval
var can6=document.getElementById("mycanvas6");
var elli=can6.getContext("2d");
elli.lineWidth="4";
elli.strokeStyle="red";
elli.scale(1, 0.5);
elli.beginPath();
elli.arc(200,200,130,0,2*Math.PI);
elli.stroke();

// cone
var can7=document.getElementById("mycanvas7");
var cone=can7.getContext("2d");
cone.lineWidth="5";
cone.strokeStyle="red";
cone.moveTo(345,220);
cone.lineTo(200,10);
cone.lineTo(55,220);
cone.lineJoin="round";
cone.stroke();
cone.scale(1, 0.3);
cone.beginPath();
cone.arc(200,750,146,0,2*Math.PI);
cone.stroke();

// cylinder
var can8=document.getElementById("mycanvas8");
var cyli=can8.getContext("2d");
cyli.lineWidth="5";
cyli.strokeStyle="red";
cyli.moveTo(50,60);
cyli.lineTo(350,60);
cyli.stroke();
cyli.moveTo(50,240);
cyli.lineTo(350,240);
cyli.stroke();
cyli.scale(0.5,1);
cyli.beginPath();
cyli.arc(100,150,90,0,2*Math.PI);
cyli.stroke();
cyli.beginPath();
cyli.arc(700,150,90,0,2*Math.PI);
cyli.stroke();

// bouncing ball
var can9=document.getElementById("mycanvas9");
var bb=can9.getContext("2d");
var dy=2;
var y=55;
function ball(){
    bb.lineWidth="2";
    bb.strokeStyle="red";
    bb.fillStyle="orange";
    bb.beginPath();
    bb.arc(200,y,50,0,2*Math.PI);
    bb.fill();
    bb.stroke();
    bb.closePath();
}
function draw(){
    bb.clearRect(0,0,can9.width,can9.height);
    ball();
    if(y+dy > can9.height-50 || y+dy<50){
        dy=-dy;
    }
    y+=dy;
}
setInterval(draw,10);
// button in canvas
// working on seprate file
var can10=document.getElementById("mycanvas10");
var btn=can10.getContext("2d");
var btnX=200;
var btnY=150;
var btnW=80;
var btnH=30;

btn.lineWidth="2";
btn.fillStyle="gray";
btn.rect(btnX,btnY,btnW,btnH);
btn.fill();
btn.stroke();
btn.font="24px Arial";
btn.fillStyle="black";
btn.fillText("button",btnX+3,btnY+24);

can10.addEventListener("click",function(event){
    if(((event.x > btnX) && (event.x < (btnX + btnW))) && ((event.y > btnY) && (event.y < (btnY + btnH)))){
        alert('hello avi');
    }
});