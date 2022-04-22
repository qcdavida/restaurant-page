console.log("Hello, testing");
console.log("working..");
console.log("importing");
import { header, mainContent } from './homePageModule';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(header());
contentDiv.appendChild(mainContent());