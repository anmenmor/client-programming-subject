const asdf = new Map();
asdf.set('x', 28);
asdf.set('y', 33.54);
asdf.set('z', 87.2);

asdf.forEach(function (valor,clave) {
    console.log(clave, valor * 2);
    asdf.set(clave, valor * 2);
})

console.log(asdf);



let result = Array.from(asdf).reduce(function(acc, v){
    return acc + v;
})
console.log(result);

asdf.delete('z');
console.log(asdf);