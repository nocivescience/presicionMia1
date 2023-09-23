const containerEl= document.querySelector(".container");
function myBalls(){
    let balls = [
        {x: 0, y: 0, r: 50, color: "red"},
        {x: 0, y: 1, r: 50, color: "blue"},
        {x: 0, y: 2, r: 50, color: "green"},
        {x: 0, y: 3, r: 50, color: "yellow"},
        {x: 0, y: 4, r: 50, color: "purple"},
        {x: 0, y: 5, r: 50, color: "orange"},
        {x: 0, y: 6, r: 50, color: "pink"},
        {x: 0, y: 7, r: 50, color: "brown"},
    ].map((ball) => {
        ball.x += 1;
        return ball;
    });
    return balls;
};
let balls = myBalls();
function app(){
    containerEl.innerHTML = "";
    balls = balls.map((ball) => {
        ball.x += 1;
        if (ball.x > window.innerWidth - ball.r) {
            ball.x = 0;
        }
        return ball;
    });
    balls.forEach((ball) => {
        const ballEl = document.createElement("div");
        ballEl.classList.add("ball");
        ballEl.style.backgroundColor = ball.color;
        ballEl.style.cssText = `
            transform: translate(${ball.x}px, ${ball.y}px);
            width: ${ball.r}px;
            height: ${ball.r}px;
            background-color: ${ball.color};
        `;
        containerEl.appendChild(ballEl);
    });
    requestAnimationFrame(app);
}
app();