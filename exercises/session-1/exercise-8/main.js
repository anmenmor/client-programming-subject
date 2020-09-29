let userNumber = prompt("Introduce un número de al menos 2 dígitos");
let long = userNumber.length;
let newNumber = [];
let show = document.getElementById("textArea");
for(i = long; i > 0; i--){
    newNumber.push(userNumber[i-1]);
}
console.log(newNumber.join(""));
console.log(userNumber);

if (userNumber == newNumber.join("")){
    console.log("Es un palíndromo");
    show.value = "Es un palíndromo";
}else{
    console.log("No es un palíndromo");
    show.value = "No es un palíndromo";
}


