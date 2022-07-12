const container = document.querySelector('#container');

const noSquares = 256;

function squareClicked(squareClass, clicked) {
    // if (clicked == 0) {inverseColour = 'red'};
    // if (clicked == 0) {inverseColour = 'red'};
    squareClass.style['background-color'] = 'red';
    // inverseColour = 
    // clicked = 0;
}

function alertFunc(i) {
    alert('id: ' + i);
}

for (i=1; i<(noSquares+1); i++) {
    squareClass = document.createElement('div');
    squareClass.className = 'square';
    squareClass.innerHTML = 'a';
    // squareClass.addEventListener('click', () => alertFunc(i));       // original attempt at adding eventlisteners per class
    squareClass.addEventListener('click', alertFunc.bind(this,i));      // new proper way of "binding" eventlistener to the individual iteration.

    document.getElementById('container').appendChild(squareClass);
}


console.log('-----');
// console.log(container.outerHTML);
// console.log(div.outerHTML);
