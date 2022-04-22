import { header } from './headerModule';
import { mainContent } from './mainContentModule';
import { menuContent } from './menuModule';
import { contactContent } from './contactModule';

const contentDiv = document.getElementById('content');
const pathFile = "./src/";

contentDiv.appendChild(header());
contentDiv.appendChild(mainContent());
setEventListeners();
loadCSSFile("style");

function setEventListeners() {
    const homeTab = document.getElementById('homeTab');
    const menuTab = document.getElementById('menuTab');
    const contactTab = document.getElementById('contactTab');
    
    homeTab.addEventListener('click', () => tabSwitching(mainContent, 'style'));
    menuTab.addEventListener('click', () =>  tabSwitching(menuContent, 'menu-style'));
    contactTab.addEventListener('click', () => tabSwitching(contactContent, 'contact-style'));
}

function tabSwitching(tabName, fileName){
    while(contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(header());
    contentDiv.appendChild(tabName());
    setEventListeners();
    loadCSSFile(fileName);
}

function loadCSSFile(nameOfFile) {
    let head = document.getElementsByTagName('head')[0];

    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = pathFile + nameOfFile + '.css';
    
    head.append(style);
}