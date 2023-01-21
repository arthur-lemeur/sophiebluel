import {Image} from './Classes/ImagesClass.js';
import {Filter} from './Classes/FiltersClass.js';
import {createHeader, createEditButton, createLogout} from "./editIndex.js";
import {createProfilePicture} from "./getProfilePicture.js";


async function fetchGallery() {
    const r = await fetch('http://localhost:5678/api/works', {
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


async function fetchCategories() {
    const r = await fetch('http://localhost:5678/api/categories', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        }
    });
    if (r.ok === true) {
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur');
}


export const createGalleryImage = () => {
    fetchGallery().then(async i => {

        const images = i.map((img) => new Image(img));

        for (const image of images) {
            await image.createGallery();
        }
        document.querySelector('.spinner-border').style.display = 'none';
        setTimeout(() => {
            const figures = document.querySelectorAll('.gallery figure');
            figures.forEach(f => f.style.opacity = '1');
        }, 300);
    });
}


const createGalleryCategories = () => {
    fetchCategories().then(async c => {
            const categories = c.map((btn) => new Filter(btn));
            for (const category of categories) {
                await category.createFilters();
            }
        }
    ).then(() => {
        document.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => toggleFilter(e));
        });
    });
}

const toggleFilter = (e) => {
    e.preventDefault();
    document.querySelector('.spinner-border').style.display = 'block';
    const filter = e.currentTarget.dataset.filter;
    e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
    e.currentTarget.classList.add('active');
    const gallery = document.querySelector('.gallery');
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach(f => f.style.opacity = '0');

    setTimeout(() => {
            gallery.innerHTML = '';

            const createFilteredGalleryImage = () => {
                fetchGallery().then(async i => {
                    const images = i.map((img) => new Image(img));
                    const filteredImages = images.filter(image => image.categoryName === filter)
                    for (const filteredImage of filteredImages) {
                        await filteredImage.createGallery();
                    }
                    document.querySelector('.spinner-border').style.display = 'none';
                    setTimeout(() => {
                        const figures = document.querySelectorAll('.gallery figure');
                        figures.forEach(f => f.style.opacity = '1');
                    }, 300);
                });
            }
            if (filter === 'all') {
                createGalleryImage();
            } else {
                createFilteredGalleryImage();
            }
            ;
        }, 400
    );

}

export const createEditionGallery = () => {
    fetchGallery().then(async i => {
        const images = i.map((img) => new Image(img));
        for (const image of images) {
            await image.editGallery();
        }
        document.querySelector('.spinner-border').style.display = 'none';
        setTimeout(() => {
            const figures = document.querySelectorAll('#galleryEdition figure');
            figures.forEach(f => f.style.opacity = '1');
        }, 300);
    });
}

const init = () => {
    createGalleryCategories();
    createGalleryImage();
    createProfilePicture();
}

init();

const storage = sessionStorage.getItem("token");
if (storage !== null) {
    createHeader();
    createEditButton();
    createLogout();
}



