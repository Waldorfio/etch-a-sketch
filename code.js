const container = document.querySelector('#container');
let noSquares = 256;
let runOnceAlready = false;

function createUserInp() {
    userInp = document.createElement('button');
    userInp.className = 'user-input';
    userInp.innerHTML = 'GRID SIZE';
    userInp.addEventListener('click', () => userPrompt(noSquares));
    document.getElementById('container').appendChild(userInp);
}
createUserInp();

function createReset() {
    reset = document.createElement('button');
    reset.className = 'reset';
    reset.innerHTML = 'RESET';
    reset.addEventListener('click', () => resetGrid(noSquares));
    document.getElementById('container').appendChild(reset);
}
createReset();

function resetGrid(noSquares) {
    for (i=0; i<(noSquares); i++) {
        currentSquare = document.getElementsByClassName('square')[i];
        currentSquare.style['background-color'] = 'grey';
    }
}

function userPrompt(noSquares) {
    noSquaresNew = prompt('Please enter the grid size (1d only):');
    noSquaresNew = parseInt(noSquaresNew);      // Fixes issues with number as float
    noSquaresNew = noSquaresNew * noSquaresNew; // Multiply to obtain grid size
    createSquares(noSquaresNew);
}

function squareClicked(squareClass) {
    squareClass.style['background-color'] = 'red';
}

// Creating the tile classes, and assigning the event listener
function createSquares(noSquares) {
    if (runOnceAlready == true) {
        document.querySelectorAll('.square').forEach(e => e.remove());  // Delete all square classes before creating again
    }
    runOnceAlready = true;
    for (i=1; (i<(noSquares+1)); i++) {
        // console.log(i)
        squareClass = document.createElement('div');
        squareClass.className = 'square';
        squareClass.innerHTML = '&nbsp';    // Displays empty spaces
        squareClass.addEventListener('mouseenter', squareClicked.bind(this,squareClass));      // new proper way of "binding" eventlistener to the individual iteration.


        document.getElementById('container').appendChild(squareClass);      // Appends the child to the parent div
    }
    resetGrid(noSquares);
}

createSquares(noSquares);   // Create the default grid

console.log('-----');
// console.log(container.outerHTML);
// console.log(div.outerHTML);
