const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const button = document.getElementById('send');

button.addEventListener('click', e => {
    e.preventDefault();
    email = inputEmail.value;
    password = inputPassword.value;
    sendData(email,password)
        .then(function(response) {
            sessionStorage.setItem('token', response.data.token);
            alert("Registro completado");
        })
        .catch(function(error) {
            alert(error.response.data.error);
        });
})

async function sendData(email, password) {
     let response = await axios.post('https://reqres.in/api/login', {email: email, password: password});
      return response;
};
