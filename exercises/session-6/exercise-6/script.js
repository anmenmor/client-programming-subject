const list = document.getElementById('list');

window.addEventListener('load', ()=> {
    const list2 = document.createElement('ul');
    getData()
    .then(function (response){
        response.data.forEach(user => {
            const li = document.createElement('li');
            li.addEventListener('click', () => {
                list2.innerHTML = '';
                displayInformation(user.id)
                .then(function(response) {
                    response.data.forEach(task => {
                        const li2 = document.createElement('li');
                        li2.innerText = task.title;
                        list2.appendChild(li2);
                        list.insertAdjacentElement('afterend', list2);
                });
            });
        });
        li.innerText = user.name;
        list.appendChild(li);
    });
  });
})

async function getData(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return response;
}

async function displayInformation(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {params: {userId: id}})
    return response;
}

    