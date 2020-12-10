var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");
container.addEventListener("click", getClickPosition, false);

function getClickPosition(e){
  var parentPosition = getPosition(container);
  
  var xPosition = e.clientX - parentPosition.x - (theThing.offsetWidth / 1);
  var yPosition = e.clientY - parentPosition.y - (theThing.offsetHeight / 1);
 
  
  var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
  theThing.style.transform = translate3dValue;
}

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  return {
    x: xPosition,
    y: yPosition
  };
}
