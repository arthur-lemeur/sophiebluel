const showPreview = (event) => {
    if(event.target.files.length > 0){
        const src = URL.createObjectURL(event.target.files[0]);
        const preview = document.querySelector("#previewImage img");
        preview.src = src;
        preview.style.display = "block";
        const frame = document.getElementById('previewImage');
        frame.style.display = "block";
        const form = document.getElementById('image-upload-form');
        form.style.display = 'none';
    }
}

const abortUpload = () => {
    const frame = document.getElementById('previewImage');
    frame.style.display = "none";
    const form = document.getElementById('image-upload-form');
    form.style.display = 'flex';
}

document.getElementById('image').addEventListener('change', showPreview);
document.querySelector('#previewImage .fa-circle-arrow-left').addEventListener('click', abortUpload);