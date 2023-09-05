const gameDashboard = document.querySelector(".game-dashboard");

let turn = "x";

let isThereWinner = false;


function game(id) {
    if (isThereWinner) return;
    let element = document.querySelector(`#${id}`);

    if (turn == "x" && element.innerHTML == "") {
        element.innerHTML = "x";
        turn = "o";
        gameDashboard.innerHTML = "O Turn";
    } else if (turn == "o" && element.innerHTML == "") {
        element.innerHTML = "o";
        turn = "x";
        gameDashboard.innerHTML = "X Turn"
    };

    // the winner function is making a check every one click
    winner();
}


function winner() {
    let squares = [];
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }

    // win Case
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        // if this is true the "endOfGame" function is called to end the game
        // the arguments are specific number of id items
        endOfGame(1, 2, 3)
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        endOfGame(4, 5, 6)
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        endOfGame(7, 8, 9)
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        endOfGame(1, 4, 7)
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        endOfGame(2, 5, 8)
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        endOfGame(3, 6, 9)
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        endOfGame(1, 5, 9)
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        endOfGame(3, 5, 7)
    }

    // draw case

    drawCase(squares)
}

function endOfGame(num1, num2, num3) {
    // call all the winner items
    let theWinners = [
        document.getElementById(`item${num1}`),
        document.getElementById(`item${num2}`),
        document.getElementById(`item${num3}`)
    ];
    // make them a specific style
    theWinners.forEach(one => {
        one.style.boxShadow = "0 0 70px 0px #ffffff45 inset";
    });
    // declare who is the winner in the dashboard
    gameDashboard.innerHTML = `<span style="color: red; font-size: 18px;">${theWinners[1].innerHTML}</span> is the winner`

    isThereWinner = true;

    setInterval(() => {
        gameDashboard.innerHTML += "."
    }, 1000)

    setTimeout(() => {
        location.reload()
    }, 3500);
}

function drawCase(squares) {

    let darwCaseCheck = squares.every(square => {
        return square != "";
    });

    if (darwCaseCheck && isThereWinner == false) {
        gameDashboard.innerHTML = `<span style="color: lightgreen;">Draw! </span>`;
        setInterval(() => {
            gameDashboard.innerHTML += "."
        }, 1000)

        setTimeout(() => {
            location.reload()
        }, 3500);
    }

}