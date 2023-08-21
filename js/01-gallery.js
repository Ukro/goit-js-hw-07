import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItemMarkup = ({ preview, description, original }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>
`;
};

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
      <img
        src=${event.target.dataset.source}
        alt=${event.target.alt}
      />
    </div>
  `);

  instance.show();

  const modalElement = document.querySelector('.basicLightbox');
  modalElement.addEventListener('click', closeModal);

  function closeModal(event) {
    if (event.target === modalElement || event.target.classList.contains('basicLightbox')) {
      instance.close();
      modalElement.removeEventListener('click', closeModal);
    }
  }
}
