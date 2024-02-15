function hideElement(element) {
   const  elementAdd =  document.getElementById(element)
   elementAdd.classList.add("hidden");
}
function showElement(element) {
   const   elementRemove =  document.getElementById(element)
   elementRemove.classList.remove("hidden");
}
function randomNumber() {
    const alphabetsString = "A B C D E F G H I K L M N O P Q R S T V X Y Z" ;
    const alphabetsAray = alphabetsString.split(' ');
    const randomNum  = Math.round(Math.random() * 25 + 1);
    const alpahabet = alphabetsAray[randomNum];
    return alpahabet;  
}

function setClassList(element) {
   const  elementBg =  document.getElementById(element)
   elementBg.classList.add("bg-amber-700")
}


