const textInputs = document.getElementsByTagName('input');
const formElement = document.getElementsByTagName('form')[0]
const registerButton = document.getElementById('register')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const passwordInput = document.getElementById('password')
const repeatPasswordInput = document.getElementById('repeatPassword')
let user;
//let users = [];

Array.from(textInputs).forEach(cur => {
    cur.addEventListener('focus', (event) => {
        event.target.style.background = '#D3D3D3';    
      });
      
    cur.addEventListener('blur', (event) => {
        event.target.style.background = '';    
      });
})

formElement.addEventListener('keyup', (ev) => {
    const target = ev.target
    if(checkTarget(target)){
        target.style.background = 'green'
    } else {
        target.style.background = 'red'
    }
    //console.dir(ev.target)
})

const checkTarget = (target) => {
    const value = target.value
    switch (target.id) {
        case "username":
            return /^[a-zA-Z]*\d*$/.test(value)
            break;
        case "email":
            return /^[a-zA-Z]*\d*@[a-zA-Z]*\d*\.[a-zA-Z]*\d*$/.test(value)
            break;
        case "phone":
            return /^\d{9}$/.test(value)
            break;
        case "password":
            return /^(.{0,5}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(value)
            break;
        case "repeatPassword":
            return /^(.{0,5}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(value)
            break;
    }
}

registerButton.addEventListener('click', ()=>{
    let username = usernameInput.value;
    let email = emailInput.value;
    let phone = parseInt(phoneInput.value);
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;
    user = new User(username, email, phone, password, repeatPassword);
    let users;
    const rawUsers = localStorage.getItem("registers")
    if(rawUsers == null) {
        users = []
    } else {
        users = JSON.parse(rawUsers);
    }
    const filteredArray = users.filter(user => user.email == email);
    if (filteredArray.length == 0) {
        users.push(user);
        localStorage.setItem("registers",JSON.stringify(users));
    } else {
        alert("El email ya existe")
    }

})

