import {closeModalButton} from "./modal.js";
import {createEditionGallery, createGalleryImage} from "./app.js";
import {Image} from "./Classes/ImagesClass.js";

const token = sessionStorage.getItem('token');
const form = document.getElementById("upload-file");


/*form.addEventListener(
    "submit",
    (event) => {
        const formData = new FormData(form);

        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:5678/api/works", true);
        request.setRequestHeader('Authorization', "Bearer " + token);
        request.send(formData);
        event.preventDefault();
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = '';
        setTimeout(() => {
                //createGalleryImage();
                closeModalButton(event);
        }, 500);
    },
    false
);
*/


 async function postGallery(formData) {
    const r = await fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: formData
    });
}

const formSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    postGallery(formData).then(res => createEditionGallery());

    const gallery = document.querySelector('.gallery');
        gallery.innerHTML = '';
        setTimeout(() => {
                closeModalButton(e);
        }, 500);
};

form.addEventListener("submit", formSubmission);
