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
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    const box3 = document.createElement('div');
    const box4 = document.createElement('div');
    container.append(box1, box2, box3, box4);
    content.append(nav, container);
}

export default loadMenuPage;