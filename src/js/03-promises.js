const refs = {
  formEl: document.querySelector(".form"),
};

refs.formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let delay = e.target.elements.delay.value;
  let step = e.target.elements.step.value;
  let amount = e.target.elements.amount.value;
  let createNotification = null;

  for (let i = 0; i < amount; i++) {
  
      createPromise(1 + i, +delay + i * +step)
        .then((result) => {
          console.log(`${result}`);
        })
        .catch((error) => {
          console.log(`${error}`);
        });
   

    
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
// фух