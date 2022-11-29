import { galleryItems } from "./gallery-items.js";
const galleryDiv = document.querySelector(".gallery");
galleryDiv.innerHTML += onCreatePlot(galleryItems);
function onCreatePlot(galleryItems) {
  return galleryItems
    .map((element) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}" rel="noopner">
            <img
                class="gallery__image"
                src="${element.preview}"
                data-source="${element.original}"
                alt="${element.description}"
                
            />
        </a>
    </div>`;
    })
    .join("");
}
galleryDiv.addEventListener("click", onItemClick);
function onItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1400" height="900">`
  );
  modal.show();
  const modalListner = function (event) {
    if (event.code === "Escape") {
      modal.close();
      galleryDiv.removeEventListener("keydown", modalListner);
    }
  };
  galleryDiv.addEventListener("keydown", modalListner);
}
