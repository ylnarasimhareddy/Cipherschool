var seconds=00;
var tens=00;
var hundered=00;
var btnStart=document.getElementById("button-start");
var btnStop=document.getElementById("button-stop");
var btnReset=document.getElementById("button-reset");
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendHundreds = document.getElementById("hundred");

btnStart.onclick=function(){
    Interval = setInterval(startTimer, 10);
}

btnStop.onclick = function() {
    clearInterval(Interval);
}
btnReset.onclick = function() {
    clearInterval(Interval);
   tens = "00";
     seconds = "00";
     hundered="00";
   appendTens.innerHTML = tens;
     appendSeconds.innerHTML = seconds;
     appendHundreds.innerHTML=hundered;
 }

function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if(seconds>59){
      hundered++;
      appendHundreds.innerHTML="0"+hundered;
      seconds=0;
      appendSeconds.innerHTML="0"+0;
    }
    if(hundered>9){
      appendHundreds.innerHTML=hundered;
    }
  
  }
  