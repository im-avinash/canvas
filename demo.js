var can10=document.getElementById("canvas");
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