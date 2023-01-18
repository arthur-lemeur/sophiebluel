import { suppression } from "../deleteWork.js"

export class Image {

    constructor(element) {
        this.id = element.id;
        this.title = element.title;
        this.url = element.imageUrl;
        this.categoryId = element.categoryId;
        this.userId = element.userId;
        this.categoryName = element.category.name;
        this.template = document.getElementById('gallery-image-layout');
        this.galleryContainer = document.querySelector('.gallery');
        this.galleryEdition = document.getElementById('galleryEdition');
    }

    async createGallery() {
        try {
            const imageTemplate = this.template.content.cloneNode(true);
            const figure = imageTemplate.querySelector("figure");
            figure.setAttribute('category-id', this.categoryName);
            const img = imageTemplate.querySelector("img");
            img.src = this.url;
            const caption = imageTemplate.querySelector('figcaption');
            caption.innerText = this.title;
            this.galleryContainer.appendChild(imageTemplate);
        } catch (e) {
            console.log(e);
        }
    };

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
            figure.appendChild(moveImage);
            figure.appendChild(deleteImage);
            const caption = imageTemplate.querySelector('figcaption');
            caption.innerHTML = "Editer";
            this.galleryEdition.appendChild(imageTemplate);

            /*const displayMoveImage = (e) => {
                const button = e.currentTarget.childNodes.;
                button.style.display = 'block';
            };

            const hideMoveImage = (e) => {
                const button = e.currentTarget.document.querySelector('move-button');
                button.style.display = 'none';
            }

            document
                .querySelectorAll('#galleryEdition figure')
                .forEach(f => f.addEventListener('mouseover', e => displayMoveImage(e)));

            document
                .querySelectorAll('#galleryEdition figure')
                .forEach(f => f.addEventListener('mouseout', e => hideMoveImage(e)));*/


            document
                .querySelectorAll('.trash-button')
                .forEach(t => t.addEventListener('click', suppression));
        } catch (e) {
        }
    };





}