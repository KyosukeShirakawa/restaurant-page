export function menuLoad(){

  const content = document.querySelector('#content');
  const menu = document.createElement('div');

  const menus = [
    {
      name: "Strawberry&Custard brulee",
      img: "../images/Strawberry&Custard brulee.jpeg"
    },
    {
      name: "Kiwi&yogurt honey",
      img: "../images/Kiwi&yogurt honey.jpeg"
    },
    {
      name: "Chocolate banana& caramel",
      img: "../images/Chocolate banana& caramel"
    },
    {
      name: "Fruits toast",
      img: "../images/Fruits toast"
    },
    {
      name: "Strawberry toast",
      img: "../images/Strawberry toast"
    },
    {
      name: "Smoked salmon&cream cheese",
      img: "../images/Smoked salmon&cream cheese"
    },
    {
      name: "Poached egg&hamburger",
      img: "../images/Poached egg&hamburger"
    },
    {
      name: "Cheese toast",
      img: "../images/Cheese toast"
    }

  ]

  content.innerHTML = "";
  menu.id = "menu";

  menus.forEach((m) => {
    const card = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    h3.textContent = m.name;
    img.src = m.img;
    card.appendChild(h3);
    card.appendChild(img);
    
    menu.appendChild(card);
  });





}