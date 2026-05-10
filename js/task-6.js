const refs = {
    inputElem: document.querySelector('input'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxesElem: document.querySelector('#boxes'),
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const markup = [];
    let width = 30;

    for (let i = 1; i <= amount; i++) {
        const color = getRandomHexColor();
        markup.push(
            `<div class="box" style="width: ${width}px; height: ${width}px; background-color: ${color}"></div>`
        );
        width += 10;
    }
    return markup.join('');
}

function destroyBoxes() {
    refs.boxesElem.innerHTML = '';
}

refs.destroyBtn.addEventListener('click', e => {
    destroyBoxes();
    e.currentTarget.blur();
});

refs.createBtn.addEventListener('click', e => {
    const amount = Number(refs.inputElem.value);

    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    destroyBoxes();
    refs.boxesElem.insertAdjacentHTML('beforeend', createBoxes(amount));

    refs.inputElem.value = '';
    e.currentTarget.blur();
});
