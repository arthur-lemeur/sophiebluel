import {ProfilePicture} from "./Classes/ProfilePicturesClass.js";
import {deleteProfilePicture} from "./deleteWork.js";

const token = sessionStorage.getItem('token');
const newImage = document.getElementById('upload-p-picture');

async function getProfilePicture() {
    const r = await fetch('http://localhost:5678/api/profile/picture', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        },
    });
    if (r.ok === true) {
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur');
}

export const createProfilePicture = () => {
    getProfilePicture().then(res => {
            const imageUrl = res[0].imageUrl;
            const img = document.getElementById('profile-picture');
            img.src = imageUrl;
        }
    );
}
export const createProfileGallery = () => {
    getProfilePicture().then(async i => {
            const images = i.map((img) => new ProfilePicture(img));
            for (const image of images) {
                await image.editGallery();
            }
        }
    );
}


async function postProfilePicture(formData) {
    const r = await fetch('http://localhost:5678/api/profile/picture', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: formData
    });
}

const profileSubmission = (e) => {
    e.preventDefault();
    getProfilePicture().then(res => {
    deleteProfilePicture(res[0].id)});
    const formData = new FormData(newImage);
    postProfilePicture(formData).then(res => createProfilePicture());
};

newImage.addEventListener("submit", profileSubmission);

