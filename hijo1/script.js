const container = document.querySelector('.container');
let x,y
x = 0;
y = 0;
function creacion(){
    
    const content = document.createElement('div');
    content.classList.add('ball');

    container.appendChild(content);
}
creacion();