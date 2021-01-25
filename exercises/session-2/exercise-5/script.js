let value = '';
const array = new Array();

do{
    value = prompt('introduce un carácter');
    array.push(value);
} while (value != 'exit');

console.log(array);

const parsedArray = array.map(parse)

console.log(getTypes(parsedArray))

function getTypes(input) {
    return input.map(function(v) {
        return new Map([
            ["value", v], ["type", typeof v]
        ])
    })
}

function parse(input) {
    if(!isNaN(input)){
        return parseInt(input);
      }else if(input === 'true') {
          return true
      } else if(input === 'false') {
        return false
      }else if (input !== 'exit') {
          return input;
      }
}

