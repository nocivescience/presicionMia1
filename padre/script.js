const container = document.querySelector('.container');
ball = document.createElement('div');
ball.classList.add('ball');
let x = 500;
let y = 300;
function app(){
    y = y + 10;
    ball.style.cssText = `
    transform: translate(${x}px, ${y}px);
    `;
    container.appendChild(ball);
    requestAnimationFrame(app)
}
app();