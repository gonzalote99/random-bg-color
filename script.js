let page = document.getElementById('page');
let coordinates = document.getElementById('coordinates');
let box = document.getElementById('mousebox');
let map = document.getElementById('colormap');


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x = 0;
let y = 0;


map.addEventListener('mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;

  page.style.backgroundColor = 'rgb('+ x +', '+ y + ', 100)';

  coordinates.textContent = x + ',' + y; 
} );


let mousebox = () => {
  box.style.left = x + 'px';
  box.style.top = y + 'px'
}

setInterval(mousebox, 100);

