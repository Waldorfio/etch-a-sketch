const container = document.querySelector('#container');


const div = document.createElement('div');
div.setAttribute("id", "Div1")

// console.log(container.outerHTML);
// for (i=1; i<30+1; i++) {
//     content.classList.add('square' + i);
// }
// content.classList.add('square1');
// content.square1.innerHTML = 'text test'

// div.classList.add('square1');

// div.getElementsByClassName('square1').innerHTML = 'free';
document.getElementById('Div1').innerHTML = 'free';

console.log(container.outerHTML);
console.log(div.outerHTML);