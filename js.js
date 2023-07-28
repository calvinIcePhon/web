const elements = document.getElementsByClassName("taskContainerRowToday");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('wheel', createWheelHandler(elements[i]));
}

function createWheelHandler(element) {
  return function(event) {
    event.preventDefault();
  
    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  };
}
