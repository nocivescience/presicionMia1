const containerEl=document.querySelector('.container');
function randomNumbers(min,max){
    let randomNumber=[]
    for(let i=0;i<10;i++){
        randomNumber.push(Math.floor(Math.random()*(max-min+1)+min));
    }
    return randomNumber;
}
function getPositions(){
    let positions=[
        {x: 0, y: 0, width: 100, height: 100, color: 'red'},
        {x: 0, y: 1, width: 100, height: 100, color: 'blue'},
        {x: 0, y: 2, width: 100, height: 100, color: 'green'},
        {x: 0, y: 3, width: 100, height: 100, color: 'yellow'},
        {x: 0, y: 4, width: 100, height: 100, color: 'pink'},
        {x: 0, y: 5, width: 100, height: 100, color: 'orange'},
        {x: 0, y: 6, width: 100, height: 100, color: 'purple'},
        {x: 0, y: 7, width: 100, height: 100, color: 'brown'},
        {x: 0, y: 8, width: 100, height: 100, color: 'gray'},
    ].map((item,index)=>{
        return{
            ...item,
            x:randomNumbers(0,9)[index]*10,
        }
    });
    return positions;
};
let positions=getPositions();
function createDivs(){
    positions=positions.map((item,index)=>{
        item.x+=1;
        if(item.x>window.innerWidth-item.width){
            item.x=0;
        }
        return item;
    })
    containerEl.innerHTML='';
    positions.forEach((item)=>{
        const divEl=document.createElement('div');
        divEl.classList.add('ball');
        divEl.style.cssText=`
            transform:translate(${item.x}px,${item.y}px);
            width:${item.width}px;
            height:${item.height}px;
            background-color:${item.color};
        `;
        containerEl.appendChild(divEl);
    });
    requestAnimationFrame(createDivs);
};
createDivs();