function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    startBtnEl: document.querySelector('[data-start]'),
    stopBtnEL: document.querySelector('[data-stop]'),
}

let setIntervalId = null;
let onClick = false;
refs.startBtnEl.addEventListener('click',  changeBodyColor);
refs.stopBtnEL.addEventListener('click', stopBodyColor);


function changeBodyColor (e) {
   if (onClick){
        return;
    }
    onClick = true;
    setIntervalId = setInterval(()=>{
    document.body.style.backgroundColor = getRandomHexColor();

    }, 1000);
   
}
function stopBodyColor (e) {
    clearInterval(setIntervalId);
    onClick = false;
}
