const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galerylist = document.querySelector(".gallery");
const defimg =[];
const img = images.map(image => {
  const newImg = `<img src=${image.url} alt=${image.alt} />`;
  defimg.push(newImg);
  galerylist.style.backgroundColor = "teal";
  galerylist.style.display = "flex";
  galerylist.style.gap = "32px"
  galerylist.style.flexDirection = "column"
})
const createimg = galerylist.insertAdjacentHTML("afterbegin", `<img src=${img.url} alt=${img.alt} />`)

defimg.forEach(img => {
  galerylist.insertAdjacentHTML("afterbegin", `<img src=${img.url} alt=${img.alt} />`)
});
