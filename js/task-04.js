const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const increment = ()=>{
    counterValue++
    value.textContent= counterValue

}
const decrement = ()=>{
    counterValue--
    value.textContent= counterValue
}
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment)