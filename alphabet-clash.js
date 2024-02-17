
function continueGame() {
   const alpahabet = randomNumber();
   const getAlphabet = document.getElementById('rendom-alphabet');
   getAlphabet.innerText = alpahabet.toLowerCase();
   setClassList(alpahabet.toLowerCase())
}

function play() {
    hideElement("home-screen");
    showElement("play-ground");
    continueGame();
    const scoreSection = document.getElementById("score-section");
    scoreSection.classList.add("hidden"); 
}

function hendelKeyUpEvent(event) {
    const playerPressed= event.key;
    const getAlphabet = document.getElementById('rendom-alphabet');
    const randomAlphabet = getAlphabet.innerText.toLowerCase() ;
    console.log(playerPressed, randomAlphabet);

    if (playerPressed === randomAlphabet) {
        console.log("you get a point");
        const crentScore = document.getElementById("crentScore")
        const crentScoreText = crentScore.innerText;
        const crentScores = parseInt(crentScoreText);
        let crent = crentScores + 1;        
        crentScore.innerText = crent;

        const tolalScorc = document.getElementById("tolal-scorc");
        tolalScorc.innerText = crent;
        removeBackground(randomAlphabet);
        continueGame();
    }
    else{
        console.log("you missed, loseed a life" );
        const crentLife = document.getElementById("crentLife")
        const crentLifeText = crentLife.innerText;
        const crentLifes = parseInt(crentLifeText);
        const crent = crentLifes - 1;  
        crentLife.innerText = crent;
        if (crent === 0) {
            const playGround = document.getElementById("play-ground");
            playGround.classList.add("hidden");
            const scoreSection = document.getElementById("score-section");
            scoreSection.classList.remove("hidden");           
        }
    }
}
document.addEventListener("keyup",hendelKeyUpEvent)
