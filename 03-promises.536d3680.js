function e(e,t){const l=Math.random()>.3;return new Promise(((o,n)=>{setTimeout((()=>{l&&o(`✅ Fulfilled promise ${e} in ${t}ms`),n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(t=>{t.preventDefault();let l=t.target.elements.delay.value,o=t.target.elements.step.value,n=t.target.elements.amount.value;for(let t=0;t<n;t++)e(1+t,+l+t*+o).then((e=>{console.log(`${e}`)})).catch((e=>{console.log(`${e}`)}))}));
//# sourceMappingURL=03-promises.536d3680.js.map
