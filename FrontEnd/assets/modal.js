let modal = null;
const focusableSelector = "button, a, input, textarea";
let focusables = [];
let prevFocusedEl = null;

const openModal = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute('href'));
    focusables = Array.from(modal.querySelectorAll(focusableSelector));
    prevFocusedEl = document.querySelector(':focus');
    focusables[0].focus();
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.addEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

const closeModalButton = (e) => {
    if (modal === null) return;
    if (prevFocusedEl != null) prevFocusedEl.focus();
    e.preventDefault();
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModalButton);
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
    modal = null;
}

document.querySelectorAll('.js-modal').forEach(
    a => {a.addEventListener('click', openModal)
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