export function menuLoad(){

  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  let menus = [
    {
      name: "Strawberry&Custard brulee",
      imgUrl: "../images/Strawberry&Custard-brulee.jpeg"
    },
    {
      name: "Kiwi&yogurt honey",
      imgUrl: "../images/Kiwi&yogurt-honey.jpeg"
    },
    {
      name: "Chocolate banana& caramel",
      imgUrl: "../images/Chocolate-banana&-caramel.jpeg"
    },
    {
      name: "Fruits toast",
      imgUrl: "../images/Fruits-toast.jpeg"
    },
    {
      name: "Strawberry toast",
      imgUrl: "../images/Strawberry-toast.jpeg"
    },
    {
      name: "Smoked salmon&cream cheese",
      imgUrl: "../images/Smoked-salmon&cream-cheese.jpeg"
    },
    {
      name: "Poached egg&hamburger",
      imgUrl: "../images/Poached-egg&hamburger.jpeg"
    },
    {
      name: "Cheese toast",
      imgUrl: "../images/Cheese-toast.jpeg"
    }

  ]

  content.innerHTML = "";
  menu.id = "menu";

  menus.forEach((m) => {

    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    let pic = document.createElement('img');
    card.className = "card";
    h3.textContent = m.name;
    pic.src = m.imgUrl;
    card.appendChild(h3);
    card.appendChild(pic);
    
    menu.appendChild(card);
  });

  content.appendChild(menu)





}