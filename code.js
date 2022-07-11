const container = document.querySelector('#container');


for (i=1; i<30+1; i++) {
    squareClass = document.createElement('div');
    squareClass.className = 'square';
    squareClass.innerHTML = 'a';
    document.getElementById('container').appendChild(squareClass);
}

console.log('-----');
console.log(container.outerHTML);
// console.log(div.outerHTML);
