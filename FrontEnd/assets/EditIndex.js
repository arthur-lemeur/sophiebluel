export const createHeader = () => {
    const banner = document.createElement('div');
    banner.classList.add('header-banner');
    banner.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i><p>Mode édition</p> <button id='publishChanges'>publier les changements</button>";
    const header = document.querySelector("body");
    header.prepend(banner);
}

export const createEditButton = () => {
    const editBtn = document.createElement('a');
    editBtn.classList.add('editionButton', 'js-modal');
    editBtn.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i>modifier";

    const introFigure = document.querySelector('#introduction figure');
    const introFigcaption = document.createElement('figcaption');
    introFigure.append(introFigcaption);
    const editProfilPicture = editBtn.cloneNode(true);
    editProfilPicture.setAttribute('id', 'profilePicture-button')
    introFigcaption.appendChild(editProfilPicture);

    const article = document.querySelector('#introduction article');
    const editDescriptionText = editBtn.cloneNode(true);
    editDescriptionText.setAttribute('id', 'descriptionText-button')
    article.prepend(editDescriptionText);

    const projects = document.querySelector('.titleProjects');
    const editGallery = editBtn.cloneNode(true);
    editGallery.setAttribute('id', 'gallery-button')
    editGallery.href = '#modal1';
    projects.appendChild(editGallery);
    const filter = document.querySelector('.btn-group');
    filter.style.visibility = 'hidden';
}

export const createLogout = () => {
    const login = document.getElementById('login-button');
    login.innerHTML = 'logout';
    login.href = './index.html';
    login.addEventListener('click', () => sessionStorage.removeItem('token'))
}


