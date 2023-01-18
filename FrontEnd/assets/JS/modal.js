import {createEditionGallery, createGalleryImage} from "./app.js";

let modal = null;
const focusableSelector = "button, a, input, textarea";
let focusables = [];
let prevFocusedEl = null;
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');

const modulation = () => {
    focusables = Array.from(modal.querySelectorAll(focusableSelector));
    prevFocusedEl = document.querySelector(':focus');
    focusables[0].focus();
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.addEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

const openModalGallery = function(e) {
    e.preventDefault();
    const gallery = document.querySelector('#galleryEdition');
    gallery.innerHTML = '';
    createEditionGallery();
    modal = document.getElementById('modal1');
    modulation();
    modal1.classList.add('modal-display');
    modal2.classList.remove('modal-display');
}

const openModalAddWork = function(e) {
    e.preventDefault();
    modal = document.getElementById('modal2');
    modulation();
    modal1.classList.remove('modal-display');
    modal2.classList.add('modal-display');
}

export const closeModalButton = (e) => {
    if (modal === null) return;
    e.preventDefault();
    modal1.classList.remove('modal-display');
    modal2.classList.remove('modal-display');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
    modal = null;
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    createGalleryImage();
}

document.querySelectorAll('.js-modal').forEach(
    a => {a.addEventListener('click', openModalGallery)
    });

const stopPropagation = (e) => {
    e.stopPropagation();
}

const focusInModal = (e) => {
    e.preventDefault();
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'));
    if (e.shiftKey === true) {
        index--;
    } else {
        index++ ;
    }
    if (index >= focusables.length) {
        index = 0;
    }
    if (index < 0) {
        index = focusables.length - 1;
    }
    focusables[index].focus();
}

window.addEventListener('keydown', function(e){
    if (e.key === 'Escape' || e.key === 'Esc') {
        closeModalButton(e)
    }
    if (e.key === 'Tab' && modal !== null) {
        focusInModal(e)
    }
});

document.querySelector('.add-picture').addEventListener('click', openModalAddWork);

document.querySelector('.fa-arrow-left-long').addEventListener('click', openModalGallery);

