let userNumber = prompt("Escribe un número entero positivo");
let totalNumber = 1;
if (isNaN(userNumber)){
    console.log("Error. No es un número");
} else {
    console.log("Sí es un número");
    if(userNumber < 0){
        userNumber = userNumber * -1;
        console.log(userNumber);
    }else{
        userNumber = userNumber * 1;
    }
    if (Number.isInteger(userNumber)){
        console.log("Es un número entero"); 
    }else{
        userNumber = Math.round(userNumber);
        console.log(userNumber);
    }
    for (let i = userNumber; i > 0; i--){
        totalNumber = totalNumber * i;
    }
    console.log(totalNumber);
}
