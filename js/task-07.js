const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text);
inputRange.addEventListener('input', (e) => {
   text.style.fontSize =  `${e.currentTarget.value}px`;
})