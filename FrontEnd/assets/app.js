import {Images} from './ImagesClass.js';
import {Filter} from './FiltersClass.js';

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



const createGalleryImage = () => {
    fetchGallery().then(async i => {
        const images = i.map((img) => new Images(img));
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

createGalleryImage();
createGalleryCategories();



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
    gallery.innerHTML ='';

    const createFilteredGalleryImage = () => {
        fetchGallery().then(async i => {
            const images = i.map((img) => new Images(img));
            const filteredImages = images.filter(image => image.categoryName == filter)
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
            };
    }, 400
    );

}


//    for (const figure of figures) {
//       const figureCategory = figure.getAttribute('category-id');



/*
if (filter === "all") {
    figure.classList.remove('hide-figure');
} else if (figureCategory != filter) {
    figure.classList.add('hide-figure');
} else {
    figure.classList.remove('hide-figure');
}

if (figureCategory != filter) {


    figure.classList.add('hide-figure');
} else {
    figure.classList.remove('hide-figure');
}
}*/