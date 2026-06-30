/* PERSON WALK COMPLETE */

setTimeout(()=>{

    document.getElementById("person1")
    .style.display="none";

    document.getElementById("person2")
    .style.display="block";

},6000);


/* SHOW HEY */

setTimeout(()=>{

    document.getElementById("hey")
    .style.opacity="1";

},6500);


/* SHOW OPEN BAG PERSON */

setTimeout(()=>{

    document.getElementById("person2")
    .style.display="none";

    document.getElementById("person3")
    .style.display="block";

},8500);


/* OPEN BAG */

setTimeout(()=>{

    document.querySelector(".bag-top")
    .style.transform=
    "rotateX(130deg)";

    document.querySelector(".light")
    .style.opacity="1";

},9500);


/* SHOW LOGIN */

setTimeout(()=>{

    document.getElementById("loginBox")
    .classList.add("show");

},11000);