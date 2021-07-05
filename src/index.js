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
// Description
const description = document.createElement('section');
const descText = document.createElement('p');
descText.textContent = `Invisible's has the best african dishes! The atmosphere 
and customer services makes you feel like you are back 
home in Nigerian, eating you native soups. We promise to 
keep you coming back for more.`;
description.appendChild(descText);
// Hours
const hours = document.createElement('section');
const hoursHeadLine = document.createElement('h2');
hoursHeadLine.textContent = `Hours`;
const hoursText = document.createElement('pre');
hoursText.textContent = `
Sunday: 8am - 10pm
Monday: 7am - 7pm
Tuesday: 7am - 7pm
Wednesday: 7am - 7pm
Thursday: 7am - 10pm
Friday: 7am - 10pm
Saturday: 8am - 10pm`;
hours.append(hoursHeadLine, hoursText);
//  Location
const location = document.createElement('section');
const locationHeadLine = document.createElement('h2');
locationHeadLine.textContent = `Location`;
const locationText = document.createElement('p');
locationText.textContent = `12, Trafford Road, Salford, Greater Manchester.`;
location.append(locationHeadLine, locationText);

content.append(nav, hero, myBrandImg, description, hours, location);