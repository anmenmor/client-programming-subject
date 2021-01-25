const input = prompt('Escribe una cadena de caracteres');
const reversed =reverseStr(input);
console.log(reversed);
function reverseStr(text) {
    console.log(text.split(''));
    const reverse =text.split('').reverse().join();
    return reverse;
}
