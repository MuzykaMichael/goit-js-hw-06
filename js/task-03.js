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

const defimg ="";
const img = images
  .map(image => {
  return`<img src=${image.url} alt=${image.alt}/>`;
}).join(' ');


galerylist.style.backgroundColor = "teal";
galerylist.style.display = "flex";
galerylist.style.gap = "32px"
galerylist.style.flexDirection = "column"

galerylist.insertAdjacentHTML("afterbegin", img);
