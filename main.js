var $f1Car = document.querySelector('.f1-car-model');

document.addEventListener('keydown', keyPress);

function keyPress(press) {

  if (press.keyCode === 38) { // up
    $f1Car.className = 'f1-car-model-up';
  } else if (press.keyCode === 40) { // down
    $f1Car.className = 'f1-car-model-down';
  } else if (press.keyCode === 37) { // left
    $f1Car.className = 'f1-car-model-left';
  } else if (press.keyCode === 39) { // right
    $f1Car.className = 'f1-car-model-right';
  }
}
