let currentPlayer = "X";
let gameOver = false;

function play(cell){

    if(cell.innerHTML != "" || gameOver){
        return;
    }

    cell.innerHTML = currentPlayer;

    checkWinner();

    if(currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    if(!gameOver){
        document.getElementById("status").innerHTML =
        "Player " + currentPlayer + " Turn";
    }
}

function checkWinner(){

    let cells = document.getElementsByClassName("cell");

    let patterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0; i<patterns.length; i++){

        let a = patterns[i][0];
        let b = patterns[i][1];
        let c = patterns[i][2];

        if(
            cells[a].innerHTML != "" &&
            cells[a].innerHTML == cells[b].innerHTML &&
            cells[b].innerHTML == cells[c].innerHTML
        ){
            document.getElementById("status").innerHTML =
            "Player " + cells[a].innerHTML + " Wins!";

            gameOver = true;
            return;
        }
    }

    let filled = true;

    for(let i=0; i<cells.length; i++){
        if(cells[i].innerHTML == ""){
            filled = false;
        }
    }

    if(filled){
        document.getElementById("status").innerHTML = "Match Draw!";
        gameOver = true;
    }
}

function resetGame(){

    let cells = document.getElementsByClassName("cell");

    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = "";
    }

    currentPlayer = "X";
    gameOver = false;

    document.getElementById("status").innerHTML =
    "Player X Turn";
}