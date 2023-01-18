

async function postLogin(url = '', data = {}) {
    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(t)
        .then((json) => {
                const token = json.token;
                sessionStorage.setItem('token', token);
            }
        );
}

const t = async (res) => {
    if(!res.ok) {
        throw new Error("error");
    }
    const json = await res.json();
    return json;
}


const login = async (e) => {
    e.preventDefault();
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const error = document.querySelector('.alert');
   try {
       await postLogin('http://localhost:5678/api/users/login', {email: emailValue, password: passwordValue});
       error.style.display = "none";
       button.value = "Connexion...";
       window.location.href = './index.html';

   } catch (e) {
       error.style.display = "block";
   }
}

const button = document.getElementById("log-in-submit");
button.addEventListener('click', e => login(e));

