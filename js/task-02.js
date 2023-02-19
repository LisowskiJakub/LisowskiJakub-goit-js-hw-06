const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
let listArray = [];
ingredients.forEach(e => {
  const liElement = document.createElement('li');
  liElement.textContent = e;
  liElement.className = 'item';
  listArray = [...listArray, liElement];

})
list.append(...listArray);
 