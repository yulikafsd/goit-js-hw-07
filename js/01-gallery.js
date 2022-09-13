import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div');
galleryEl.addEventListener('click', onClickShowModal);

function onClickShowModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const { src, alt } = event.target;
  const instance = basicLightbox.create(`<img src="${src}" alt="${alt}"/>`);
  instance.show();

  if (basicLightbox.visible()) {
    galleryEl.addEventListener('keydown', onKeyDownCloseModal);
    function onKeyDownCloseModal(event) {
      event.preventDefault();
      if (event.key === 'Escape') {
        instance.close();
        galleryEl.removeEventListener('keydown', onKeyDownCloseModal);
      }
    }
  }
}

function makeGallery(arr) {
  const galleryItemsMarkup = arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join('');
  return galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

makeGallery(galleryItems);
