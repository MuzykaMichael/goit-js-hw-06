const body = document.body;
const categ = body.querySelector('#categories');
const item = categ.querySelectorAll(".item");
console.log("Number of categories:",item.length);

item.forEach(element => {
    console.log("Category:",element.firstElementChild.innerHTML);
    console.log("Elements:",element.lastElementChild.children.length);
})
