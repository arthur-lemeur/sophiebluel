import {createEditionGallery} from "./app.js";
import {createProfileGallery} from "./getProfilePicture.js";

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


export async function deleteProfilePicture(id) {
    const r = await fetch(`http://localhost:5678/api/profile/picture/${id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
    });
}

export const suppressionProfilePictures = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const gallery = document.querySelector('#profileEdition');
    gallery.innerHTML = '';
    deleteProfilePicture(id).then(res => createProfileGallery());
};