import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

// Render the home as default
loadHomePage();
// Tab switching Logic
const content = document.querySelector('#content');
function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
function loadTab(e) {
  clearContent(content);
  if (e.srcElement.id === 'home') loadHomePage();
  if (e.srcElement.id === 'menu') loadMenuPage();
  if (e.srcElement.id === 'contact') loadContactPage();
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach((tab) => tab.addEventListener('click', loadTab));
}
const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => tab.addEventListener('click', loadTab));
