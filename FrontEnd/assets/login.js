async function postLogin(url = '', data = {}) {
    const r = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (r.ok === true) {
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur');
}


const login = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    postLogin('http://localhost:5678/api/users/login', {email: emailValue, password: passwordValue})
        .then((result) => {
            if (result.ok === true) {
                alert ('SUCCESS')
            } else {
                const error = document.querySelector('.alert');
                error.style.display = "block";
            }
        })
    console.log(emailValue, passwordValue);

/*    if (email === adminEmail && password === adminPwd) {
        button.value = "Connexion...";
        window.location.href = '../index.html';
        //alert(window.location.href)
    } else {
        const error = document.querySelector('.alert');
        error.style.display = "block";
    }*/
}
const button = document.querySelector('#log-in-submit');
const submit = document.querySelector('form');
button.addEventListener('click', e => login(e));