//This creates the header for the site
function header() {
    //create the html elements
    const headerDiv = document.createElement('div');
    const logoDiv = document.createElement('div');
    const navOptionsDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    //add classes to the div elements
    headerDiv.classList.add('header');
    logoDiv.classList.add('logo');
    navOptionsDiv.classList.add('nav-options');
    homeBtn.classList.add('tablink');
    menuBtn.classList.add('tablink');
    contactBtn.classList.add('tablink');

    //add ids to buttons
    homeBtn.setAttribute('id', 'homeTab');
    menuBtn.setAttribute('id', 'menuTab');
    contactBtn.setAttribute('id', 'contactTab');

    //add text content to elements
    logoDiv.textContent = "deGoat's Stew";
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    //add attributes to buttons
    homeBtn.type = "button";
    menuBtn.type = "button";
    contactBtn.type = "button";

    //append the elements to the dom tree
    ul.appendChild(homeBtn);
    ul.appendChild(menuBtn);
    ul.appendChild(contactBtn);
    navOptionsDiv.appendChild(ul);
    headerDiv.appendChild(logoDiv);
    headerDiv.appendChild(navOptionsDiv);

    return headerDiv;
}

export { header };