let thePenguin = document.querySelector("#penguin")
let container = document.querySelector("#contentContainer")

container.addEventListener("click", getClickPosition, false)

function getClickPosition(e) {
  let xPosition = e.clientX;
  let yPosition = e.clientY;
 
  let translate3dValue = "translate3d(" + xPosition + "px" + yPosition + "px, 0")
  thePenguin.style.transform = translate3dValue;
}
