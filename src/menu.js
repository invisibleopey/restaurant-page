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
    // Faux Menu Text
    const menuTxt = document.createElement('p');
    menuTxt.textContent = "This is the menu, Lorem Ipsum";
    content.append(nav, menuTxt);
}

export default loadMenuPage;