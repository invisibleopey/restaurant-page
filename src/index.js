import BrandImg from './seafood-okra-soup.jpg'

const content = document.querySelector('#content');
// Navigation
const nav = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = "Contact";
nav.append(home, menu, contact);
// Headline Text
const hero = document.createElement('h1');
hero.textContent = 'Invisible Afro Cuisines';
// Brand Image Addition
const myBrandImg = new Image();
myBrandImg.src = BrandImg;

content.append(nav, hero, myBrandImg);