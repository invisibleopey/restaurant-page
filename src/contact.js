import AddressImg from './address.jpg';
import './style.css';

function loadContactPage() {
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
    // Contact Information
    const container = document.createElement('div');
    const phoneNum = document.createElement('p');
    const address = document.createElement('p');
    phoneNum.textContent = `123 456 789`;
    address.textContent = `12, Trafford Road, Salford, Greater Manchester.`;
    // Adding google map image
    const myAddressImg = new Image();
    myAddressImg.src = AddressImg;
    container.append(phoneNum, address, myAddressImg);
    content.append(nav, container);
}

export default loadContactPage;