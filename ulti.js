function hideElement(element) {
   const  elementAdd =  document.getElementById(element)
   elementAdd.classList.add("hidden");
}

function showElement(element) {
   const   elementRemove =  document.getElementById(element)
   elementRemove.classList.remove("hidden");
}

function randomNumber() {
    const alphabetsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    const alphabetsAray = alphabetsString.split('');
    const randomNum  = Math.round(Math.random() * 25 );
    console.log(randomNum);
    const alpahabet = alphabetsAray[randomNum];
    return alpahabet;  
}

function setClassList(element) {
   const  elementBg =  document.getElementById(element)
   elementBg.classList.add("bg-amber-700")
}

function removeBackground(element) {
   const  elementBg =  document.getElementById(element)
   elementBg.classList.remove("bg-amber-700")
}


