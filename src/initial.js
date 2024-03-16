export function initialLoad() {
  const content = document.querySelector('#content');

  const logo = document.createElement('img');
  
  logo.src = "../images/logo.png"
  
  content.appendChild(logo);
  
}
