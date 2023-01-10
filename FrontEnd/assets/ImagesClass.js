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
    }
}