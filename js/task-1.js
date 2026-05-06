'use strict';

const refs = {
    listElem: document.querySelector('#categories'),
    itemsElems: document.querySelectorAll('.item'),
};

const categoriesNumber = refs.listElem.children.length;
console.log(`Number of categories: ${categoriesNumber}`);

refs.itemsElems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const counts = item.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${counts}`);
});
