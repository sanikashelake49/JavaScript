let time=document.getElementById("time");
let date=document.getElementById("date");
 
//for the button
let startBtn=document.getElementById("start");
let stopBtn=document.getElementById("stop");

//using the event listner we can perform the action
let interval;

startBtn.addEventListener("click", () =>{

    interval=setInterval(()=>{
   let now=new Date();

   let hour=now.getHours();
   let min=now.getMinutes();
   let  sec=now.getSeconds();

   let todayDate=now.getDate();
   let month=now.getMonth();
   let year=now.getFullYear();

   time.innerHTML=hour+":"+min+":"+sec;
   date.innerHTML=todayDate+"/"+month+"/"+year;
    },1000);

});

stopBtn.addEventListener("click", () =>{
    clearInterval(interval);
});

