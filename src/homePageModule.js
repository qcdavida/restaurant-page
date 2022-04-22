function header() {
    //create the html elements
    const headerDiv = document.createElement('div');
    const logoDiv = document.createElement('div');
    const navOptionsDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const firstLI = document.createElement('li');
    const secondLI = document.createElement('li');
    const thirdLI = document.createElement('li');

    //add classes to the div elements
    headerDiv.classList.add('header');
    logoDiv.classList.add('logo');
    navOptionsDiv.classList.add('nav-options');

    //add text content to elements
    logoDiv.textContent = "deGoat's Stew";
    firstLI.textContent = "Home";
    secondLI.textContent = "Menu";
    thirdLI.textContent = "Contact";

    //append the elements to the dom tree
    ul.appendChild(firstLI);
    ul.appendChild(secondLI);
    ul.appendChild(thirdLI);
    navOptionsDiv.appendChild(ul);
    headerDiv.appendChild(logoDiv);
    headerDiv.appendChild(navOptionsDiv);

    return headerDiv;
}

function mainContent() {
    //create html elements
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

export { 
    header,
    mainContent
};