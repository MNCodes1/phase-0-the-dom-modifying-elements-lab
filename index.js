// Write your code here!
// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content to "YOUR-NAME is the champion"
newHeader.textContent = 'YOUR-NAME is the champion';

// Append it to the document body
document.body.appendChild(newHeader);
