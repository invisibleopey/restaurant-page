import OkroImg from './seafood-okra-soup.jpg';
import EgusiImg from './egusi-soup.jpg';
import OgbonoImg from './ogbono-soup.jpg';
import NkwobiImg from './nkwobi.jpg';
import './style.css';

function loadMenuPage() {
  const content = document.querySelector('#content');
  // Navigation
  const nav = document.createElement('ul');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');
  nav.classList.add('tabs', 'lists');
  home.setAttribute('id', 'home');
  menu.setAttribute('id', 'menu');
  contact.setAttribute('id', 'contact');
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';
  nav.append(home, menu, contact);
  // Menu Content
  const container = document.createElement('div');
  container.classList.add('menuDiv');
  // First Item
  const box1 = document.createElement('div');
  const myOkroImg = new Image();
  myOkroImg.src = OkroImg;
  const item1 = document.createElement('h3');
  item1.textContent = 'Seafood Okro Soup';
  box1.append(myOkroImg, item1);
  // Second Item
  const box2 = document.createElement('div');
  const myEgusiImg = new Image();
  myEgusiImg.src = EgusiImg;
  const item2 = document.createElement('h3');
  item2.textContent = 'Egusi Soup';
  box2.append(myEgusiImg, item2);
  // Third Item
  const box3 = document.createElement('div');
  const myOgbonoImg = new Image();
  myOgbonoImg.src = OgbonoImg;
  const item3 = document.createElement('h3');
  item3.textContent = 'Ogbono Soup';
  box3.append(myOgbonoImg, item3);
  // Fourth Item
  const box4 = document.createElement('div');
  const myNkwobiImg = new Image();
  myNkwobiImg.src = NkwobiImg;
  const item4 = document.createElement('h3');
  item4.textContent = 'Nkwobi';
  box4.append(myNkwobiImg, item4);
  container.append(box1, box2, box3, box4);
  content.append(nav, container);
}

export default loadMenuPage;
