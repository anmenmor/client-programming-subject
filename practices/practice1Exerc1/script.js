const userInput = document.getElementById('radio');
const resultInput = document.getElementById('result');

const clickAreaButton =document.getElementById('area').addEventListener('click',() =>{

    const userNumber = userInput.value;

    if (Number.isNaN(Number(userNumber))) {
        alert('No ha introducido un numero');
    } else {
        if (userNumber % 1 !== 0){
            alert('El numero introducido no es entero');
        }else {
            if (userNumber < 0){
                alert('El numero introducido es menor de 0');
            }else{
                const area = 4*Math.PI*Math.pow(userNumber,2);
                resultInput.value = area;
            }
        }
    }
})

const clickVolumeButton =document.getElementById('volume').addEventListener('click',() =>{

    const userNumber = userInput.value;

    if (Number.isNaN(Number(userNumber))){
        alert('No ha introducido un numero');
    }else {
        if (userNumber % 1 !== 0){
            alert('El numero introducido no es entero');
        } else {
            if (userNumber < 0) {
                alert('El numero introducido es menor de 0');
            } else{
                const volume = 4/3*Math.PI*Math.pow(userNumber,3);
                resultInput.value = volume;
            }
        }
    }
})