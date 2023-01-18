const changePicture = (event) => {
    if(event.target.files.length > 0){
        const src = URL.createObjectURL(event.target.files[0]);
        const image = document.querySelector("#profile-picture");
        image.src = src;
        image.style.display = "block";
    }
}


document.getElementById('profilePictureInput').addEventListener('change', changePicture);