var $f1Car = document.querySelector('#f1-car-model');

document.onkeydown = keyPress;

function keyPress(press) {

  press = press || window.event;

  if (press.keyCode === 38) {
    console.log('up arrow');
  } else if (press.keyCode === 40) {
    console.log('down arrow');
  } else if (press.keyCode === 37) {
    console.log('left arrow');
  } else if (press.keyCode === 39) {
    console.log('right arrow');
  }
}
