var container = document.querySelector("#contentContainer");
var myCircle = document.querySelector("#circle");

container.addEventListener("click", getClickPosition, false);
function getClickPosition(e) {
  var parentPosition = getPosition(container);
  var xPosition = e.clientX - parentPosition.x - (myCircle.offsetWidth / 2);
  var yPosition = e.clientY - parentPosition.y - (myCircle.offsetHeight / 2);
  var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0px)";
  myCircle.style.transform  = translate3dValue;
}

function getPosition(element){
  var xPosition = 0;
  var yPosition = 0;
  
  while(element){
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return{
    x: xPosition,
    y: yPosition
  };
}
