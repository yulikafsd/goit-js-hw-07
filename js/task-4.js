'use strict';

const refs = {
    formElem: document.querySelector('.login-form'),
};

refs.formElem.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
        userEmail: refs.formElem.elements.email.value.trim(),
        userPassword: refs.formElem.elements.password.value.trim(),
    };

    const formDataValues = Object.values(formData);

    e.submitter.blur();

    if (formDataValues.includes('')) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);
    refs.formElem.reset();
});
