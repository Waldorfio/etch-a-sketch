const container = document.querySelector('#container');
let noSquares = 256;

userInp = document.createElement('button');
userInp.className = 'user-input';
userInp.innerHTML = 'GRID SIZE';
userInp.addEventListener('click', userPrompt);
document.getElementById('container').appendChild(userInp);

reset = document.createElement('button');
reset.className = 'reset';
reset.innerHTML = 'RESET';
reset.addEventListener('click', resetGrid);
document.getElementById('container').appendChild(reset);

function resetGrid() {
    for (i=0; i<(noSquares); i++) {
        currentSquare = document.getElementsByClassName('square')[i];
        currentSquare.style['background-color'] = 'grey';
    }
}

function userPrompt() {
    noSquares = prompt('Please enter the grid size (1d only):');
    resetGrid();
    return noSquares
}

function squareClicked(squareClass) {
    squareClass.style['background-color'] = 'red';
}

// Creating the tile classes, and assigning the event listener
for (i=1; i<(noSquares+1); i++) {
    squareClass = document.createElement('div');
    squareClass.className = 'square';
    squareClass.innerHTML = '&nbsp';    // Displays empty spaces
    squareClass.addEventListener('mouseenter', squareClicked.bind(this,squareClass));      // new proper way of "binding" eventlistener to the individual iteration.


    document.getElementById('container').appendChild(squareClass);      // Appends the child to the parent div
}


console.log('-----');
// console.log(container.outerHTML);
// console.log(div.outerHTML);
