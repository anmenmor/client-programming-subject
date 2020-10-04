const userInput1 = document.getElementById('name');
const userInput2 = document.getElementById('surname1');
const userInput3 = document.getElementById('surname2');
const textAreaInput = document.getElementById('result');

const clickButton =document.getElementById('save').addEventListener('click',() =>{

    const name = userInput1.value;
    const surname1 = userInput2.value;
    const surname2 = userInput3.value;

    if (name === "" || surname1 === "" || surname2 === "") {
        alert('Hay algun campo sin rellenar');
    } else {
        let date = new Date();
        date.setDate(date.getDate() + 3);
        document.cookie = `${name} ${surname1} ${surname2}; expires=${date}; path=/;`;
        textAreaInput.value = document.cookie;
    }
})