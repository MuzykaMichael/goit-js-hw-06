const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const lst = document.querySelector('#ingredients');
const createLi = ingredients.map(ingredient => {
  const newIngredient = document.createElement("li");
  newIngredient.classList.add("item");
  newIngredient.textContent = ingredient;
  return newIngredient
});

lst.append(...createLi)
