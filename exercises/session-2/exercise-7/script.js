const strings = ['this','is','a','collection','of','strings'];

const longestString = strings.reduce(function(acc, v) {
    if(acc.length > v.length) {
        return acc
    } else {
        return v
    }

}, "");

console.log(longestString);

const filtered = strings.filter(string => string.includes('is'));
console.log(filtered);

const sorted = strings.sort(function(a, b) {
    if (a.length > b.length){
        return 1;
    }
    else if (a.length < b.length){
        return -1;
    }
    else {
        return 0;
    }
});
console.log(sorted);

const removed = strings.pop();
console.log(removed);
console.log(sorted);

const add = strings.unshift("hello");
console.log(strings);

const remove3Elem = strings.slice(3);
console.log(remove3Elem);                        
