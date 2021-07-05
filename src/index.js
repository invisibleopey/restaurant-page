import BrandImg from './seafood-okra-soup.jpg'

const content = document.querySelector('#content');
// Navigation
const nav = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
home.textContent = `Home`;
menu.textContent = `Menu`;
contact.textContent = `Contact`;
nav.append(home, menu, contact);
// Headline Text
const hero = document.createElement('h1');
hero.textContent = `Invisible Afro Cuisines`;
// Brand Image Addition
const myBrandImg = new Image();
myBrandImg.src = BrandImg;
const description = document.createElement('section');
const descText = document.createElement('p');
descText.textContent = `Invisible's has the best african dishes! The atmosphere 
and customer services makes you feel like you are back 
home in Nigerian, eating you native soups. We promise to 
keep you coming back for more.`;
description.appendChild(descText);

content.append(nav, hero, myBrandImg, description);