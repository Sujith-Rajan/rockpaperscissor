//fetch user input
const pRock = document.querySelector("#pRock");
const pScissor = document.querySelector("#pScissor");
const pPapper = document.querySelector("#pPapper");

//random selection of computer
const cRock = document.querySelector("#cRock");
const cScissor = document.querySelector("#cScissor");
const cPapper = document.querySelector("#cPapper");
const choice = [cRock,cScissor,cPapper];


 
// Animation applied all icon
pRock.addEventListener(
    "click",
    (move = () => {
        
        const computerChoice = choice[Math.floor(Math.random()*3)];
        
        computerChoice.classList.add("fa-beat");
        console.log(computerChoice);
        pScissor.classList.remove("fa-beat");
        pPapper.classList.remove("fa-beat");
        pRock.classList.add("fa-beat");
    })
);
pScissor.addEventListener(
    "click",
    (move = () => {
        const computerChoice = choice[Math.floor(Math.random()*3)];
        computerChoice.classList.add("fa-beat");
        pRock.classList.remove("fa-beat");
        pPapper.classList.remove("fa-beat");
        pScissor.classList.add("fa-beat");
    })
);
pPapper.addEventListener(
    "click",
    (move = () => {
        const computerChoice = choice[Math.floor(Math.random()*3)];
        computerChoice.classList.add("fa-beat");
        pRock.classList.remove("fa-beat");
        pScissor.classList.remove("fa-beat");
        pPapper.classList.add("fa-beat");
    })
);
