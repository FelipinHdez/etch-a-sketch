const grid = document.querySelector('#grid');

const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', setSize);

const randButton = document.querySelector('#rand');
randButton.addEventListener('click', setRandColor);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

let color = '#000000'
let gridSize = 16;

setSquares(gridSize);

function setSquares(squareNumber){
    grid.innerHTML = '';
    document.documentElement.style.setProperty('--grid-elements', squareNumber);

    for (let i = 0; i < squareNumber**2; i++){
        let square = document.createElement('div');
        square.classList.add('grid-element');
        square.addEventListener('mouseover', changeColor);

        if (squareNumber <= 40){
            square.addEventListener('transitionend', removeBorder);
            setTimeout(() => {
                square.classList.add('border');},
                (i%squareNumber*30) + (Math.floor(i/squareNumber)*30)+50
                );

        }
        grid.appendChild(square);
    }

}

function setSize(){
    let newSize = Number(window.prompt('Enter sketch size: (maximum is 50 x 50)', '16'));
    if (newSize < 1 || newSize > 50) return;
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

function removeBorder(){
    this.classList.remove('border')
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