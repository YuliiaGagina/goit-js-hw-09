import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";



const refs = {
    dataInputEl: document.querySelector('[id="datetime-picker"]'),
    coverForField: document.querySelectorAll('.field'),
    btnEl: document.querySelector('[data-start]'),
    valueEl: document.querySelectorAll('.value'),
    labelEl: document.querySelectorAll('.label'),
    timer:document.querySelector('.timer'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

     if (selectedDates[0] < new Date){
        refs.btnEl.setAttribute("disabled", "");
        window.alert("Please choose a date in the future");
        return;
     } else {
        refs.btnEl.removeAttribute("disabled");

     }
   
    const timer ={
    timerId: null,
    timeForTimer: selectedDates[0] - new Date,
    isActive: false,
  
    start(){
      if(this.isActive){
        return;
      }
      this.isActive = true;
    
       this.timerId = setInterval(()=>{
        const diff = selectedDates[0] - new Date;
      const { days, hours, minutes, seconds} = convertMs(diff);

      refs.valueEl[0].textContent = days;
      refs.valueEl[1].textContent = hours;
      refs.valueEl[2].textContent = minutes;
      refs.valueEl[3].textContent = seconds;
         
         if (diff <= 1000) {
          clearInterval(this.timerId);
       }
        
        

   },1000);
      },
     
   
    }
    refs.btnEl.addEventListener('click', () => {
      timer.start();
    });
    
}
};
 console.log(Date.now());
flatpickr('[id="datetime-picker"]', options);


function pad(value){
  return String(value).padStart(2, '0');
}

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad( Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
 
    
}

refs.timer.style.display = 'flex';
refs.coverForField.forEach(elem =>{
  elem.style.display = 'flex';
  elem.style.flexDirection = 'column';
  elem.style.marginRight = '20px';
})
refs.valueEl.forEach(elem =>{
  elem.style.fontSize = '32px';
  elem.style.color = 'red';
})
refs.labelEl.forEach(elem =>{
   elem.style.fontSize = '32px';
   elem.style.color = 'red';
})




