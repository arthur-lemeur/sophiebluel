const changePresentation = (e) => {
    e.preventDefault();
    document.querySelectorAll('#introduction article p').forEach( p => p.style.display = 'none');
    const textarea = document.getElementById('presentation');
    textarea.style.display = 'block';
    };


document.getElementById('profileText-button').addEventListener('click', changePresentation);