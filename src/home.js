// import { HotModuleReplacementPlugin } from "webpack";

export function homeLoad(){

  const content = document.querySelector('#content');
  content.innerHTML = "";



  const home = document.createElement('div');
  home.id = "home";


  const contact = document.createElement('div');
  const contactH1 = document.createElement('h1');
  const tell = document.createElement('p');
  const youtube = document.createElement('p');
  const insta = document.createElement('p');


  contact.id = "contact";
  contactH1.textContent = "Contact";
  tell.textContent ="075-468-1652"
  youtube.innerHTML ='<a href="youtu.be/NxlpwWoumLo">YouTube</a>'
  insta.innerHTML = '<a href="https://www.instagram.com/cafeteriakoto/">Instagram</a>'

  contact.appendChild(contactH1);
  contact.appendChild(tell);
  contact.appendChild(youtube);
  contact.appendChild(insta);

  home.appendChild(contact);

  const location = document.createElement('div');
  const locationH1 = document.createElement('h1');
  const mapLink = document.createElement('p');

  location.id = "location";
  locationH1.textContent = "Location";
  mapLink.innerHTML = '<a href="https://www.google.com/maps/place/Cafeteria+koto/@35.0393161,135.7310554,17z/data=!3m1!4b1!4m6!3m5!1s0x600107a345695ac7:0x1463c522d753c04f!8m2!3d35.0393161!4d135.7336303!16s%2Fg%2F11h0v8p99p?entry=ttu">京都府京都市北区衣笠御所ノ内町14</a>'
  
  contact.className = "home-content";
  location.className = "home-content";
  location.appendChild(locationH1);
  location.appendChild(mapLink);


  
  home.appendChild(location);



  content.appendChild(home);

}