const key = ['a', 'b', 'c', 'd', 'e'];
const value = [-62.1, '16 cm', 79.45, -43, '51.3'];

function createMap() {
    const numbers = new Map();
    for (let i = 0; i <= 4; i++){
        numbers.set(key[i], value[i]);
    }
    return numbers;
}
function createMap2(a, b, c, d, e) {
    const numbers = new Map();
    
    numbers.set('a', a);
    numbers.set('b', b);
    numbers.set('c', c);
    numbers.set('d', d);
    numbers.set('e', e);
    return numbers;
}
//console.log(createMap());
//console.log(createMap2(-62.1, '16 cm', 79.45, -43, '51.3'));

function printMap(input) {
    input.forEach((v, k) => {
        console.log(k, v);
    })
}

let createdMap = createMap();
//console.log(createdMap);
//printMap(createdMap);

function deny(input) {
    input.forEach((v, k) => {
        if(isNaN(v)){  
            input.set(k, 0);
        }else{  
            input.set(k, v * -1);
        }
        
    });
    printMap(input);
}

deny(createdMap);