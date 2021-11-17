// DownloadLink Functionality
const downloadLink = document.querySelector('.downloadLink');

const thankYouParagraph = document.createElement('p');

const paragraphContent = document.createTextNode('Thank you for downloading!');

thankYouParagraph.appendChild(paragraphContent);
thankYouParagraph.style.cssText =
  'margin-top: 10px; margin-right: 10px; color:#283593;';

function onDownloadLinkClick() {
  downloadLink.insertAdjacentElement('afterend', thankYouParagraph);
}

downloadLink.addEventListener('click', onDownloadLinkClick);

// MoreBtn Functionality

const moreBtn = document.querySelector('#moreBtn');

function onMoreBtnClick() {
  const dots = document.getElementById('dots');
  const moreDescription = document.getElementById('more');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    moreBtn.innerHTML = 'Read more';
    moreDescription.style.display = 'none';
  } else {
    dots.style.display = 'none';
    moreBtn.innerHTML = 'Read less';
    moreDescription.style.display = 'inline';
  }
}

moreBtn.addEventListener('click', onMoreBtnClick);
