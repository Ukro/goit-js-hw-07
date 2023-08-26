import { galleryItems } from './gallery-items.js';

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

let currentInstance = null;

function onGalleryItemClick(evnt) {
  evnt.preventDefault();
   if(evnt.target.nodeName !==  'IMG') {
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

  if (currentInstance) {
    currentInstance.close(); // закриваємо інстанс
  }

  instance.show();
  currentInstance = instance;

  instance.element().querySelector('img').addEventListener('click', onModalImageClick);
}

function onModalImageClick() {
  currentInstance.close();
}

galleryList.addEventListener('click', onGalleryItemClick);
