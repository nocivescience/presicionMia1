const container = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('ball');
let x,y
x = 0;
y = 0;
function creacion(){
    x+=10;
    content.style.cssText = `
    transform: translate(${x}px,${y}px);
    `;
    container.appendChild(content);
    requestAnimationFrame(creacion);
}
creacion();