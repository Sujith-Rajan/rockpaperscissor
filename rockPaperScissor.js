//decalration variable for fetch user input______________________________________________________
const pRock = document.querySelector("#pRock");
const pScissor = document.querySelector("#pScissor");
const pPapper = document.querySelector("#pPapper");

//random selection of computer___________________________________________________________________
const cRock = document.querySelector("#cRock");
const cScissor = document.querySelector("#cScissor");
const cPapper = document.querySelector("#cPapper");
const choice = [cRock, cScissor, cPapper];

// computer auto selection when after player click_______________________________________________

pRock.addEventListener("click", () => playGame("rock"));
pScissor.addEventListener("click", () => playGame("scissor"));
pPapper.addEventListener("click", () => playGame("papper"));
var playerPoint = 0;
var computerPoint = 0;

function playGame(selection) {
    // if already any animation active that removed when play game________________________________
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    cRock.classList.remove("fa-beat");
    cPapper.classList.remove("fa-beat");
    cScissor.classList.remove("fa-beat");
    pRock.classList.remove("fa-beat");
    pScissor.classList.remove("fa-beat");
    pPapper.classList.remove("fa-beat");
    computerChoice.classList.add("fa-beat");

    if (selection === "rock") {
        // add animation both player_______________________________________________________________
        computerChoice.classList.add("fa-beat");
        pRock.classList.add("fa-beat");

        // check condition_________________________________________________________________________
        if (computerChoice === cRock) {
            document.getElementById("result").textContent = "Both have Same Selection !";
        } else if (computerChoice === cScissor) {
            document.getElementById("result").textContent = "You have scored";
            playerPoint += 1;
        } else if (computerChoice === cPapper) {
            document.getElementById("result").textContent = "Computer has scored";
            computerPoint += 1;
        }

        updateScoreDisplay();
    } else if (selection === "scissor") {
        computerChoice.classList.add("fa-beat");
        pScissor.classList.add("fa-beat");

        if (computerChoice === cScissor) {
            document.getElementById("result").textContent = "Both have Same Selection !";
        } else if (computerChoice === cRock) {
            document.getElementById("result").textContent = "Computer has scored";
            computerPoint += 1;
        } else if (computerChoice === cPapper) {
            document.getElementById("result").textContent = "You have scored";
            playerPoint += 1;
        }

        updateScoreDisplay();
    } else if (selection === "papper") {
        computerChoice.classList.add("fa-beat");
        pPapper.classList.add("fa-beat");
        if (computerChoice === cPapper) {
            document.getElementById("result").textContent = "Both have Same Selection !";
        } else if (computerChoice === cRock) {
            document.getElementById("result").textContent = "You have scored";
            playerPoint += 1;
        } else if (computerChoice === cScissor) {
            document.getElementById("result").textContent = "Computer has scored";
            computerPoint += 1;
        }
        updateScoreDisplay();
    }
}

function updateScoreDisplay() {
    document.getElementById("scoreDisplayPlayer").textContent = playerPoint;
    document.getElementById("scoreDisplayComputer").textContent = computerPoint;
}
