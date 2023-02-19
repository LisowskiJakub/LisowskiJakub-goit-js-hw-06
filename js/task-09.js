function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn=document.querySelector('.change-color');
const color = document.querySelector('.color');
const background = document.body;

changeBtn.addEventListener('click',e=>{
const randomColor=getRandomHexColor();
color.textContent=randomColor;
background.style.backgroundColor=randomColor;
})