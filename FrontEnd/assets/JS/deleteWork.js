import {createEditionGallery} from "./app.js";

const token = sessionStorage.getItem('token');

async function deleteWork(id) {
    const r = await fetch(`http://localhost:5678/api/works/${id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
    });
}



export const suppression = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const gallery = document.querySelector('#galleryEdition');
    gallery.innerHTML = '';
    deleteWork(id).then(res => createEditionGallery());
};


