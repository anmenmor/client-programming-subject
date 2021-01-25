let input = prompt('Introduce números separados por /');
let result = input.split('/').filter(function(v){
    return !isNaN(v);
})
.reduce(function (acc,v){
    return acc + parseInt(v);
}, 0)
console.log(result);
