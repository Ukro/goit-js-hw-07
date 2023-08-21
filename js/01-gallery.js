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

const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

console.log(galleryMarkup);
galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evnt) {
  evnt.preventDefault();
  if  (evnt.target.nodeName !==  'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
  <div class="modal">
      <img
    src=${evnt.target.dataset.source}
    alt=${evnt.target.alt}
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
