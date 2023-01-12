export class Images {

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
        }
    };

    async editGallery() {
        try {
            const imageTemplate = this.template.content.cloneNode(true);
            const img = imageTemplate.querySelector("img");
            img.src = this.url;
            const deleteImage = document.createElement('button');
            deleteImage.classList.add('trash-button');
            deleteImage.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";
            const figure = imageTemplate.querySelector('figure');
            figure.appendChild(deleteImage);
            const caption = imageTemplate.querySelector('figcaption');
            caption.innerHTML = "Editer";
            this.galleryEdition.appendChild(imageTemplate);
        } catch (e) {
        }
    }
}