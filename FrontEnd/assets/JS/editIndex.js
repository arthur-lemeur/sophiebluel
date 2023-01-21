export const createHeader = () => {
    const banner = document.createElement('div');
    banner.classList.add('header-banner');
    banner.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i><p>Mode édition</p> <button id='publishChanges'>publier les changements</button>";
    const loading = document.createElement('div');
    loading.setAttribute('class', 'loading-bar');
    banner.appendChild(loading);
    const header = document.querySelector("body");
    header.prepend(banner)
    const publish = document.querySelector("#publishChanges");
    const onPublication = () => {
        loading.style.animationDuration = '2s';
        loading.style.animationName = 'publication';
        setTimeout(
            () => {
                sessionStorage.removeItem('token');
        window.location.href ='./index.html'}, 2000
        );

    }
    publish.addEventListener('click', onPublication);
}

export const createEditButton = () => {
    const editBtn = document.createElement('a');
    editBtn.classList.add('editionButton', 'js-modal');
    editBtn.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i>modifier";


    const introFigure = document.querySelector('#introduction figure');
    const introFigcaption = document.createElement('figcaption');
    introFigure.append(introFigcaption);

    const formPicture = document.createElement('form');
    formPicture.setAttribute('id', 'form-picture');
    introFigcaption.appendChild(formPicture);

    const editProfilePictureInput = document.createElement('input');
    editProfilePictureInput.setAttribute('type', 'file');
    editProfilePictureInput.setAttribute('id', 'profilePictureInput');
    editProfilePictureInput.setAttribute('name', 'PictureInput');
    editProfilePictureInput.setAttribute('accept', 'image/*');


    const editProfilePictureLabel = document.createElement('a');
    editProfilePictureLabel.classList.add('editionButton');
    editProfilePictureLabel.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i>modifier";
    editProfilePictureLabel.setAttribute('id', 'profilePicture-button');

    formPicture.appendChild(editProfilePictureInput);
    formPicture.appendChild(editProfilePictureLabel);

    const article = document.querySelector('#introduction article');
    const editDescriptionText = document.createElement('button');
    editDescriptionText.classList.add('editionButton');
    editDescriptionText.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i>modifier";
    editDescriptionText.setAttribute('id', 'profileText-button');

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
    login.addEventListener('click', () => sessionStorage.removeItem('token'));
}


