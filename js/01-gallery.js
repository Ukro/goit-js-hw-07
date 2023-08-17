import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr
      .map(
        (item) => `<li  class="item js-product-item">
    <img src="${item.preview}" width="300" />
   
    
    </li>`
      )
      .join("");
  
    container.insertAdjacentHTML("beforeend", markup);
  };
  
  const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
      return;
    }
    const currentListItem = event.target.closest(".js-product-item");
     const currentListItemId = currentListItem.description;
     const product = galleryItems.find((item) => item.description === currentListItemId);
  console.log(product);
    const modalInstance = basicLightbox.create(`<div class="modal">
    

      <img src="${product.preview}" />
      
      <p>${product.description}</p>
    </div>`);
  
    modalInstance.show();
  };
  
  renderList(galleryItems, listEl);
  listEl.addEventListener("click", handleListClick);
  

//console.log(galleryItems);
