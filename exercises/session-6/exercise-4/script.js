const table = document.getElementById('table');
const bButton = document.getElementById('back');
const fButton = document.getElementById('forward');
let pag=1;


window.addEventListener('load', ()=> {
  getData(pag);
})

async function getData(page){
    await axios.get('https://reqres.in/api/users', {
        params: {
           page: page 
        }})
    .then(function (response) {
        console.log(response)
        response.data.data.forEach(user => {
            const tr = document.createElement('tr');
            const tdFName = document.createElement('td');
            const tdLName = document.createElement('td');
            tdFName.innerText = user.first_name;
            tdLName.innerText = user.last_name;
            table.appendChild(tr);
            tr.appendChild(tdFName);
            tr.appendChild(tdLName);
            tdFName.addEventListener('click', () => {
                singleUser(user.id);
            })
    })
})
}

fButton.addEventListener('click', ()=> {
    table.innerHTML = ''
    pag++;
    getData(pag);
})
bButton.addEventListener('click', ()=> {
    table.innerHTML = ''
    pag--;
    getData(pag);
})

async function singleUser(id) {
    await axios.get(`https://reqres.in/api/users/${id}`)
        .then(function(response) {
            alert(response.data.data.email);
        })
        .catch(function(error) {
            if (error.response.status == 404) {
                alert("Not found")
            } else {
                alert("error")
            }
        })
}



