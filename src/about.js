export function aboutLoad(){

  const content = document.querySelector('#content');
  const about = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const img = document.createElement('img');

  about.id = "about";
  h1.textContent = "About";
  p.textContent = "Cafeteria Koto is a crepe, shake, and coffee store, located near the Kinkaku-ji (Golden Pavilion)";
  img.src = "../images/about.jpeg";

  about.appendChild(h1);
  about.appendChild(p);
  about.appendChild(img);

  content.appendChild(about);

}