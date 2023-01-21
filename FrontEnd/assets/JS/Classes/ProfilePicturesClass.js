import {suppressionProfilePictures} from "../deleteWork.js"
import {createProfilePicture} from "../getProfilePicture.js";

export class ProfilePicture {

    constructor(element) {
        this.id = element.id;
        this.url = element.imageUrl;
        this.userId = element.userId;
        this.template = document.getElementById('gallery-image-layout');
        this.profileEdition = document.getElementById('profileEdition');
    }


    async editGallery() {
        try {
            const imageTemplate = this.template.content.cloneNode(true);
            const img = imageTemplate.querySelector("img");
            img.src = this.url;
            const moveImage = document.createElement('button');
            moveImage.classList.add('move-button');
            moveImage.innerHTML = "<i class=\"fa-solid fa-up-down-left-right\"></i>";
            const deleteImage = document.createElement('button');
            deleteImage.classList.add('trash-button');
            deleteImage.setAttribute('type', 'button');
            deleteImage.setAttribute('id', this.id);
            deleteImage.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";
            const figure = imageTemplate.querySelector('figure');
            figure.setAttribute('id', `image${this.id}`);
            figure.appendChild(moveImage);
            figure.appendChild(deleteImage);
            const caption = imageTemplate.querySelector('figcaption');
            caption.setAttribute('id', `figcaption${this.id}`);
            caption.classList.add('figcaption-profile');
            caption.innerHTML = "<button>Selectionner</button>";
            this.profileEdition.appendChild(imageTemplate);

            document
                .querySelectorAll('#modal3 .trash-button')
                .forEach(t => t.addEventListener('click', suppressionProfilePictures));
        } catch (e) {
        }

        const buttons = document.querySelectorAll('.figcaption-profile button');


        buttons.forEach(b => {
            b.addEventListener('click', () => createProfilePicture())
        });
    };


}