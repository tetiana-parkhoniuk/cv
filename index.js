const downloadLink = document.querySelector('.downloadLink');

const thankYouParagraph = document.createElement('p');
const paragraphContent = document.createTextNode('Thank you for downloading!');
thankYouParagraph.appendChild(paragraphContent);
thankYouParagraph.style.cssText =
  'margin-top: 10px; margin-right: 10px; color:#283593;';

function onClick() {
  downloadLink.insertAdjacentElement('afterend', thankYouParagraph);
}

downloadLink.addEventListener('click', onClick);
