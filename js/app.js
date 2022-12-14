const selections = document.querySelectorAll(".selection");

let pScore = 0;
let cScore = 0;

selections.forEach((selection) => {
    selection.addEventListener("click", function() {
        const pInput = this.value;

        const cOptions = ["rock", "paper", "scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoveImgs(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWin()) {
            pScore = cScore = 0;
        }
    });
});

function updateMoveImgs(pInput, cInput) {
    document.getElementById("p-move").src = `./img/${pInput}.svg`;
    document.getElementById("c-move").src = `./img/${cInput}.svg`;
}

function compareInputs(pInput, cInput) {
    if(pInput === cInput) {
        document.getElementById("result-text").innerHTML = "It is a tie!";
        return;


    }

    if(pInput === "rock"){
        if(cInput == "scissors") {
            document.getElementById("result-text").innerHTML = "You win!";
            pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer win!";
            cScore++;
        }
    }

    if(pInput === "paper"){
        if(cInput == "rock") {
            document.getElementById("result-text").innerHTML = "You win!";
            pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer win!";
            cScore++;
        }
    }
    // pInput == "scissors"
    else {
        if(cInput == "paper") {
            document.getElementById("result-text").innerHTML = "You win!";
            pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer win!";
            cScore++;
        }
    }
}

function updateScore() {
    document.getElementById("p-score").innerHTML = pScore;
    document.getElementById("c-score").innerHTML = cScore;
}

function checkWin() {
    if(pScore === 5 || cScore === 5) {
        const winner  = pScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game. Better luck nest time";
        document.getElementById("result-text").innerHTML = winner;
        return true;
    }
    return false;
}