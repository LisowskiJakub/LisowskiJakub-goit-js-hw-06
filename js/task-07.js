const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = '56px';

inputRange.addEventListener('input', (e) => {
   text.style.fontSize =  `${e.currentTarget.value}px`;
})