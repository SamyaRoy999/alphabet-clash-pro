
function continueGame() {
   const alpahabet = randomNumber();
   const getAlphabet = document.getElementById('rendom-alphabet');
   getAlphabet.innerText = alpahabet;
   setClassList(alpahabet.toLocaleLowerCase())
}

function play() {
    hideElement("home-screen");
    showElement("play-ground");
    continueGame();
}
