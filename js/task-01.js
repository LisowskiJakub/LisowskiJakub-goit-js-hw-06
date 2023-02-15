const categoriesElements = document.querySelectorAll('.item');
//VIEW
console.log(`Number of categories: ${categoriesElements.length}\n`);
categoriesElements.forEach(e => {
  console.log(`Category: ${e.firstElementChild.textContent}\nElements: ${e.lastElementChild.children.length}
      `)
}
);
