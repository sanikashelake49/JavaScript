let time=document.getElementById("time");

let startBtn=document.getElementById("start");
let stopBtn=document.getElementById("stop");
let resetBtn=document.getElementById("reset");

let sec=0;
let min=0;
let hour=0;

let interval=null;

startBtn.addEventListener("click",() =>{

      if(interval!==null){
        return;
      }

     interval=setInterval(() =>{
        sec++;

        if(sec===60){
            sec=0;
            min++;
        }

        else if(min==60){
            min=0;
            hour++;
        }
                                   //this 2 is the length of 01 instead of 1
        let h=String(hour).padStart(2,"0");
        let m=String(min).padStart(2,"0");
        let s=String(sec).padStart(2,"0");

         time.innerHTML=`${h}:${m}:${s}`;
        // console.log(`${h}:${m}:${s}`);
     },1000);

});

stopBtn.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
});

resetBtn.addEventListener("click",() =>{
    clearInterval(interval);
interval=null;
     sec="00";
     min="00";
     hour="00";

     time.innerHTML=`${hour}:${min}:${sec}`;
});