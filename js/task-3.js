'use strict';

const refs = {
    inputElem: document.querySelector('#name-input'),
    outputElem: document.querySelector('#name-output'),
};

refs.inputElem.addEventListener('input', () => {
    const inputValue = refs.inputElem.value.trim();
    if (inputValue) {
        refs.outputElem.innerHTML = inputValue;
    } else {
        refs.outputElem.innerHTML = 'Anonymous';
    }
});
