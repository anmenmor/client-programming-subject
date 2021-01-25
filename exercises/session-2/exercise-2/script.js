function mult(...numbers) {
    return numbers.reduce(function(acc,v){
        return acc * v;
    })
}
const total = mult(1,2,3,4);
console.log(total);