const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const lst = document.querySelector('#ingredients');
const defArray = []
const createLi = ingredients.map(ingredient => {
  const newIngredient = document.createElement("li");
  newIngredient.classList.add("item");
  newIngredient.textContent = ingredient;
  defArray.push(newIngredient)
});

defArray.forEach(li => {
  lst.append(li);
})