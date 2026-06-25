function start(){

    let img = document.getElementById("bigImage");

    img.style.display = "block";

    let topPos = 0;
    let angle = 0;

    let move = setInterval(function(){

        // move downward slowly
        topPos += 2;

        // circular dancing movement
        let leftPos = 400 + Math.cos(angle) * 120;

        let danceTop = topPos + Math.sin(angle) * 60;

        angle += 0.2;

        img.style.left = leftPos + "px";
        img.style.top = danceTop + "px";

        // stop at bottom
        if(danceTop > window.innerHeight - 150){
            clearInterval(move);
        }

    }, 20);

}