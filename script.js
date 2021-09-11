var min=0;
var sec=0;
var msec=0;
var minhead=document.getElementById("min");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");
var interval=0;

function timer(){
    msec++;
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++;
        sechead.innerHTML=sec;
        msec=0;
    }else if(sec>=60){
        min++;
        minhead.innerHTML=min;
        sec=0;
    } }

function start(){
    interval=setInterval(timer,10);
    
}
function stop(){
    clearInterval(interval);
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minhead.innerHTML=min;
    sechead.innerHTML=sec;
    msechead.innerHTML=msec;
    stop();
}