let character = document.getElementById("character");
let game = document.getElementById("game");
let interval;
let both = 0;


function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    if(left>0){
    character.style.left = left - 1 + "px";
    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    if(left<690)
    character.style.left = left + 1 + "px";

}

document.addEventListener("keydown", event => {
    if(both==0);
    {
         both++;
     
     if(event.key==="ArrowLeft") {
        interval = setInterval(moveLeft, 1);
     }

     if(event.key==="ArrowRight") {
     interval = setInterval(moveRight, 1);
     }


}

function character2 (character2){
    
}

})
