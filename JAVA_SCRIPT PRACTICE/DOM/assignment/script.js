let chare=document.getElementById("hello");
console.dir(chare);
chare.innerText=chare.innerText+" from apna collage student";
console.log("hello");

let divs=document.querySelectorAll(".box");
let i=1;
for(let div of divs){
    div.innerText=`new unique value${i}`;
    i++;
}



//divs[0].innerText="new unique value"