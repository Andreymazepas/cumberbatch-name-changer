'use strict';
import names from './names.json';

// const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;

const randomRange = () => {
  return Math.floor(Math.random() * names.names.length);
};

const pageContent = document.getElementsByTagName('*');
console.log(pageContent);
for (let i = 0; i < pageContent.length; i++) {
  if (pageContent[i].innerHTML.includes('Benedict Cumberbatch')) {
    pageContent[i].innerHTML = pageContent[i].innerHTML.replace(
      /(?<![-@_.])Benedict Cumberbatch(?![-@_.])/gi,
      names.names[randomRange()]
    );
  } else if (pageContent[i].innerHTML.includes('Benedict')) {
    pageContent[i].innerHTML = pageContent[i].innerHTML.replace(
      /(?<![-@_.])Benedict(?![-@_.])/gi,
      names.names[randomRange()].split(' ')[0]
    );
  } else if (pageContent[i].innerHTML.includes('Cumberbatch')) {
    pageContent[i].innerHTML = pageContent[i].innerHTML.replace(
      /(?<![-@_.])Cumberbatch(?![-@_.])/gi,
      names.names[randomRange()].split(' ')[1]
    );
  }
}
