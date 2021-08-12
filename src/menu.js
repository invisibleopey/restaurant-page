import OkroImg from './seafood-okra-soup.jpg';
import EgusiImg from './egusi-soup.jpg';
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
    home.textContent = `Home`;
    menu.textContent = `Menu`;
    contact.textContent = `Contact`;
    nav.append(home, menu, contact);
    // Menu Content
    const container = document.createElement('div');
    container.classList.add('menuDiv');
    // First Item
    const box1 = document.createElement('div');
    const myOkroImg = new Image();
    myOkroImg.src = OkroImg;
    const item1 = document.createElement('h2');
    item1.textContent = `Seafood Okro Soup`;
    box1.append(myOkroImg, item1);
    // Second Item
    const box2 = document.createElement('div');
    const myEgusiImg = new Image();
    myEgusiImg.src = EgusiImg;
    const item2 = document.createElement('h2');
    item2.textContent = `Egusi Soup`;
    box2.append(myEgusiImg, item2);
    // Third Item
    const box3 = document.createElement('div');
    // Fourth Item
    const box4 = document.createElement('div');
    container.append(box1, box2, box3, box4);
    content.append(nav, container);
}

export default loadMenuPage;