import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.innerHTML += onCreatePlot(galleryItems);
function onCreatePlot(galleryItems) {
  return galleryItems
    .map((element) => {
      return `<a class="gallery__item" href="${element.original}">
        <img class="gallery__image" src="${element.preview}" alt="${element.description}"/>
        </a>`;
    })
    .join("");
}

let modal = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
modal.on("show.simplelightbox");
