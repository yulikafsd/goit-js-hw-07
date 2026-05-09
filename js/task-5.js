'use strict';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function isDark(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Формула яскравості (YIQ)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128; // Повертає true, якщо колір темний
}

const refs = {
    buttonElem: document.querySelector('.change-color'),
    spanElem: document.querySelector('.color'),
};

refs.buttonElem.addEventListener('click', e => {
    const bgColor = getRandomHexColor();
    const color = isDark(bgColor) ? '#fff' : '#000';

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = color;
    refs.spanElem.textContent = bgColor;

    console.log(color);
    e.currentTarget.blur();
});
