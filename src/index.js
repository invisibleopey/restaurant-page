import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

loadHomePage();
// Tab switching 
const content = document.querySelector('#content');
function clearContent(content) {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => tab.addEventListener('click', loadTab));

function loadTab(e) {
    clearContent(content);
    if (e.srcElement.id === 'home') loadHomePage();
    if (e.srcElement.id === 'menu') loadMenuPage();
    if (e.srcElement.id === 'contact') loadContactPage();
}