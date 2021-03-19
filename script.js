let containerElement = document.getElementById('container');


function gridMaker(size){
    let range = size * size;
    for (let i = 1; i <= range; i++){
        let createAnotherGridDiv = document.createElement('div');
        containerElement.appendChild(createAnotherGridDiv);
    }
}

gridMaker(16);

const drewBlack = function black(obj){
    obj.target.classList.add('drew');
}

let grid = document.querySelectorAll('#container div');

Array.from(grid).map(box => box.addEventListener('mouseover', drewBlack));
