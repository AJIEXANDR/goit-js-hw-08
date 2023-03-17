// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import galleryItemsMarup from '../js modules/gallery-markup';

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarup(galleryItems));

const ligthbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
