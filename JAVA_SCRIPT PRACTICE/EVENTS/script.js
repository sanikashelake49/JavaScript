let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",() =>{
  if(currMode=="light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else{
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});

// let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) =>{
//   console.log("button1 was clicked");
//   console.log(evt);
// });

// let btn1=document.querySelector("#btn1");
// btn1.onclick= () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

  