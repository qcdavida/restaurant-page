//This creates the main content for the home tab
function mainContent() {
    //create HTML elements
    const mainContentDiv = document.createElement('div');
    const heroDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    //add classes to elements
    mainContentDiv.classList.add('main-content');
    heroDiv.classList.add('hero');

    //add id to element
    btn.setAttribute('id', 'menu-btn');

    //add text content to elements
    h1.textContent = "Welcome To deGoat's Stew";
    p.textContent = "Stew that warms up your heart";
    btn.textContent = "Menu";

    //append elements to DOM Tree
    heroDiv.appendChild(h1);
    heroDiv.appendChild(p);
    heroDiv.appendChild(btn);
    mainContentDiv.appendChild(heroDiv);
    
    return mainContentDiv;
}

export { mainContent };