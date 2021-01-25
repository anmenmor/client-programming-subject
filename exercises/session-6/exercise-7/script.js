const list = document.getElementById('list');

window.addEventListener('load', ()=> {
    const list2 = document.createElement('ul');
    getAlbum()
        .then(function (response) {
            response.data.forEach(album => {
                const li = document.createElement('li');
                getUsername(album.userId)
                     .then(function (resp) {
                        li.innerText = `${album.title} -> ${resp.data.username}`;
                        list.appendChild(li);
                        li.addEventListener('click', () => {
                            list2.innerHTML = '';
                            getPhotos(album.userId)
                                .then(function(response){
                                    response.data.forEach(photo => {
                                        const li2 = document.createElement('li');
                                        li2.innerText = photo.title;
                                        list2.appendChild(li2);
                                        list.insertAdjacentElement('afterend', list2);
                            });
                    });
                
            });
        });
    })
})
})

async function getAlbum() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return response;
}

async function getUsername(id) {
    let resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return resp;
}

async function getPhotos(id) {
    let response = await axios.get('https://jsonplaceholder.typicode.com/photos', {params: {albumId: id}})
    return response;
}