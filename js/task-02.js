const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lst = document.querySelector('#ingredients')

for (let i = 0; i<=ingredients.length - 1; i+=1) {
  const createli = document.createElement("li");
  createli.textContent = ingredients[i];
  lst.append(createli);
}

