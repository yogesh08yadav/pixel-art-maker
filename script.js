const container = document.querySelector('.container');
const colorPicker = document.querySelector('.color-picker');
const resetBtn = document.querySelector('.reset');
const size = document.querySelector('.size');

let isDown = false;

function createGrid() {
  container.style.setProperty('--size', size.value);

  for (let i = 0; i < size.value * size.value; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener('mousedown', () => handleMouseDown(div));
    div.addEventListener('mouseover', () => handleMouseOver(div));
    container.appendChild(div);
  }
}

function handleMouseDown(div) {
  div.style.backgroundColor = colorPicker.value;
}

function handleMouseOver(div) {
  if (!isDown) return;
  div.style.backgroundColor = colorPicker.value;
}

window.addEventListener('mousedown', () => (isDown = true));
window.addEventListener('mouseup', () => (isDown = false));

function reset() {
  container.innerHTML = '';
  createGrid();
}

resetBtn.addEventListener('click', reset);

size.addEventListener('keyup', function () {
  reset();
});

createGrid();
