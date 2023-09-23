const containerEl = document.querySelector('.container');

// lista de numeros aleatorios
const numeros = [];

let positions = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
    { x: 0, y: 6 },
].map((position) => {
    return {
        x: position.x * 10,
        y: position.y,
    };
});
for (let i = 0; i < positions.length; i++) {
    const numero=Math.random()*100;
    numeros.push(numero);
}    
const app=()=>{
    containerEl.innerHTML = '';
    positions = positions.map((position,i) => {
        position.x += numeros[i];
        if(position.x>window.innerWidth-100){
            position.x=0;
        }
        return position;
    })
    positions.forEach((position) => {
        const elemento = document.createElement('div');
        elemento.classList.add('ball');
        elemento.style.cssText = `
            transform: translate(${position.x}px, ${position.y}px);
        `;
        containerEl.appendChild(elemento);
    })
    requestAnimationFrame(app);
}
app(positions);


// const containerEl = document.querySelector('.container');
// let positions = [
//     { x: 0, y: 0 },
//     { x: 0, y: 10 },
//     { x: 0, y: 20 },
//     { x: 0, y: 30 },
//     { x: 0, y: 40 },
// ]

// function app() {
//     containerEl.innerHTML = '';
//     positions = positions.map((position) => {
//         position.x += 1;
//         return position;
//     })
//     positions.forEach((position) => {
//         const elemento = document.createElement('div');
//         elemento.classList.add('ball');
//         elemento.style.cssText = `
//             transform: translate(${position.x}px, ${position.y}px);
//         `;
//         containerEl.appendChild(elemento);
//     })
//     requestAnimationFrame(app);
// }
// app(positions);


// const containerEl = document.querySelector('.container');
// let positions = [
//     { x: 0, y: 0 },
//     { x: 0, y: 10 },
//     { x: 0, y: 20 },
//     { x: 0, y: 30 },
//     { x: 0, y: 40 },
// ];

// function app() {
//     // Borra todos los elementos previos en el contenedor
//     containerEl.innerHTML = '';

//     // Actualiza las posiciones en cada iteración
//     positions = positions.map((position) => {
//         return {
//             x: position.x + 1,
//             y: position.y,
//         };
//     });

//     // Crea y agrega elementos div en las nuevas posiciones
//     positions.forEach((position) => {
//         const divEl = document.createElement('div');
//         divEl.classList.add('ball');
//         divEl.style.cssText = `
//             transform: translate(${position.x}px, ${position.y}px);
//         `;
//         containerEl.appendChild(divEl);
//     });

//     requestAnimationFrame(app);
// }

// app();
