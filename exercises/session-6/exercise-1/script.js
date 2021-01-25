const inputName = document.getElementById('name');
const inputJob = document.getElementById('job');
const button = document.getElementById('send');

button.addEventListener('click', e => {
    e.preventDefault();
    let name = inputName.value;
    let job = inputJob.value;
    sendData(name, job)
        .then(response => {
            if(typeof response === 'string') {
                alert(response);
            } else {
                alert(response.id);
            }
            inputName.value = response.name;
            inputJob.value = response.job;
        })
})

async function sendData(name, job) {
    inputJob.value = '';
    inputName.value = '';

        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, job: job})
        });
        if (response.status == 201) {
            return response.json();
        } else {
            return "Ha habido un error"
        }
}