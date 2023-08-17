import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr
      .map(
        (item) => `<li  class="gallery__item item js-product-item">
   
    

    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        width="350"
      />
    </a>

    
    </li>`
      )
      .join("");
  
    container.insertAdjacentHTML("beforeend", markup);
  };
  
//   const handleListClick = (event) => {
//     if (event.currentTarget === event.target) {
//       return;
//     }
//     const currentListItem = event.target.closest(".js-product-item");
//      const currentListItemId = currentListItem.description;
//      const product = galleryItems.find((item) => item.description === currentListItemId);
//   console.log(product);
//     const modalInstance = basicLightbox.create(`<div class="modal">
    

//       <img src="${product.preview}" />
      
//       <p>${product.description}</p>
//     </div>`);
  
//     modalInstance.show();
//   };
  
  renderList(galleryItems, listEl);
   listEl.addEventListener("click", handleListClick);
  

//console.log(galleryItems);

//==================

// // Get the gallery items
// var galleryItems = document.querySelectorAll('.gallery__item');

// // Add a click listener to each gallery item
// galleryItems.forEach(function(item) {
//   item.addEventListener('click', openLightbox);
// });

// // Open the lightbox
// function openLightbox(event) {
//   // Prevent the default action of the link
//   event.preventDefault();

//   // Get the large image url
//   var largeImageUrl = event.target.dataset.source;

//   // Open the lightbox with the large image
//   basicLightbox.openImage(largeImageUrl);
//}
