let input = prompt('introduce una frase');
function capitalize(text) {
   let capitalized = text.replace(/\b\w/g, l => l.toUpperCase());
   return capitalized;
}
console.log(capitalize(input));