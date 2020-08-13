const grid = document.querySelector('#grid');

const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', setSize);

const randButton = document.querySelector('#rand');
randButton.addEventListener('click', setRandColor);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

const colorButton = document.querySelector('#color');
colorButton.addEventListener('click', setColor);

let color = '#000000'
let gridSize = 16;

setSquares(gridSize);

function setSquares(squareNumber){
    grid.innerHTML = '';
    document.documentElement.style.setProperty('--grid-elements', squareNumber);

    squareNumber *= squareNumber;
    for (let i = 0; i < squareNumber; i++){
        let square = document.createElement('div');
        square.classList.add('grid-element');
        square.addEventListener('mouseover', changeColor);
        grid.appendChild(square);
    }
}

function setSize(){
    let newSize = Number(window.prompt('Enter sketch size: (default is 16 x 16)', '16'));
    if (newSize < 1) return;
    gridSize = newSize
    reset();
}

function setRandColor(){
    color = getRandomColor();
    setColorViewer();
}

function reset(){
    setSquares(gridSize);
}

function setColor(){

}

function setColorViewer(){
    const colorViewer = document.querySelector('#color-viewer');
    colorViewer.style.color = color;
}

function changeColor(e){
    this.style.background = color;
}

function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
}