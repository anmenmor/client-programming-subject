let userNumber;
do{
    userNumber = prompt("Escribe un número entero positivo entre 1 y 10") * 1;

    console.log(userNumber);
    console.log(Number.isInteger(userNumber));

}while(userNumber < 0 || !Number.isInteger(userNumber));

for(let i = 1; i <= 1000; i++){
    if(i % userNumber == 0){
        console.log(i);
    }
}
