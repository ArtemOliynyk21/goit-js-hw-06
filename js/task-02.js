const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];
ingredients.forEach(item => {
  const listIngredients = document.createElement('li')
  listIngredients.textContent = item;
  listIngredients.classList.add('item');
  items.push(listIngredients);
})
document.querySelector('#ingredients').append(...items);

