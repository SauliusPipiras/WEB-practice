const cols = document.querySelectorAll('.col')

// function randomColor() {
//    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, 0);
// }

document.addEventListener('keydown', event => {
   event.preventDefault();
   if (event.code.toLowerCase() === 'space') {
      setRandomColors()
   }
})

document.addEventListener('click', event => {
   const type = event.target.dataset.type;

   if (type === 'lock') {
      const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target 
      : event.target.children[0];
      // console.log(node)
      node.classList.toggle('fa-lock-open');
      node.classList.toggle('fa-lock');
   }
})

function setRandomColors() {
   cols.forEach((col) => {
      const isLocked = col.querySelector('i').classList.contains('fa-lock');
      const text = col.querySelector('h2');
      const button = col.querySelector('button');
      const color = chroma.random();

      if (isLocked) {
         return;
      }

      text.textContent = color;
      col.style.background = color;

      setTextColor (text, color);
      setTextColor (button, color);

   })
}

function setTextColor (text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'gray' : 'white';
}

setRandomColors();