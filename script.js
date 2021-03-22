let containerElement = document.getElementById('container');
const clearButton = document.getElementById('clear');

//Create Grids

function gridMaker(size){
    containerElement.innerHTML = '';
    let range = size * size;
    containerElement.style.setProperty('--gridSize', size);
    for (let i = 1; i <= range; i++){
        let createAnotherGridDiv = document.createElement('div');
        containerElement.appendChild(createAnotherGridDiv);
    }
    
}
gridMaker(25);

//Drew Grids

function drewBlack(obj) {
    obj.target.classList.add('drew');
}

let grid = document.querySelectorAll('#container div');
let gridEvent = Array.from(grid).map(box => box.addEventListener('mouseover', drewBlack));
console.log(grid);    


// Events

function clearGrids(){
    for (let i =0; i< grid.length; i++){
        grid[i].classList.remove('drew');
    }
    let askSize = prompt("Please enter size of the grid-box between 1-40:");
    while (askSize < 1 || askSize > 40 || isNaN(askSize)){
        askSize = prompt("Please enter size of the grid-box between 1-40:");
    }
    gridMaker(askSize);
    
    grid = document.querySelectorAll('#container div');
    gridEvent = Array.from(grid).map(box => box.addEventListener('mouseover', drewBlack));
    console.log(grid);
}

clearButton.addEventListener('click', clearGrids);
