const numbers = [1,12,4,18,9,7,11,3,101,5,6];

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

console.log(getMaxOfArray(numbers));

const even = numbers.filter(number => number % 2 == 0);
console.log(even);
// otra forma de hacer numbers.filter (sin arrow function).
numbers.filter(function(number) {
  return number % 2 == 0;
})

const odd = numbers.filter(number => number % 2 != 0);
console.log("Odd");
console.log(odd);

console.log("Divisible 3");
console.log(numbers.every(number => number % 3 == 0));

const total = even.concat(odd);
console.log(total);

const order = numbers.sort().reverse();
console.log("Ordered array");
console.log(order);