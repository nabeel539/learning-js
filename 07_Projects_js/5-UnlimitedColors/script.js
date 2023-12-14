// generate Random Color
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    // #FFFFFF - white
    let color = '#';
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random()*16)];
  
    }
    return color;
}

console.log(randomColor());

let intervalId;
const startChangingColor = function(){
   if (!intervalId) {
    intervalId = setInterval(changeBgColor,500);
   }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);