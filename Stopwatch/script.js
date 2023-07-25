let hr=0;
let min=0;
let sec= 0;
let count=0;
let timer = false;

function start(){
    timer =true;
    stopwatch();
}

function stop(){
    timer= false;
}
function reset(){
    timer= false;
    hr=0;
    min=0;
    sec=0;
    count:0;
    document.getElementById('count').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('hr').innerHTML="00";

}

function stopwatch(){
    if(timer==true){
        count = count+1;
        
        if(count==100){
            sec = sec + 1;
            count=0;
        }
        if(sec==60){
            min= min+1;
            sec = 0
        }
        if(min==60){
            hr = hr+1;
            min=0;
            sec=0;
        }
        
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let CountString = count;
        
        if(min < 10){
            minString ="0"+min;
        }
        if(sec < 10){
            secString ="0"+sec;
        }
        if(count < 10){
            CountString ="0"+count;
        }
        if(hr < 10){
            hrString ="0"+hr;
        }

        document.getElementById('count').innerHTML=CountString;
        document.getElementById('sec').innerHTML=secString;
        document.getElementById('min').innerHTML=minString;
        document.getElementById('hr').innerHTML=hrString;
        setTimeout("stopwatch()",10);
    }
}