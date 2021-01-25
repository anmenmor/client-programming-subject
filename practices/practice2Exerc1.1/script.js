const userInput = document.getElementById('num');
const numbersArray = new Array();
const clickAddButton = document.getElementById('add');
const textAreaInput = document.getElementById('numbersToSum');
const clickAGetResultButton = document.getElementById('getResult');
const textAreaResultInput = document.getElementById('result');
const selectorNumber = document.getElementById('numberSelector');
const deleteButton = document.getElementById('delete');

clickAddButton.addEventListener('click',() =>{
    const writtenNumber = parseInt(userInput.value);
    
    if (numbersArray.length === 0) {
        let newOption = new Option(writtenNumber);
        numbersArray.push(writtenNumber);
        selectorNumber.add(newOption, undefined);
    }else{
            if(!numbersArray.includes(writtenNumber)){
                
                for(let x = 0; x < numbersArray.length; x++) {
                    selectorNumber.remove(0); 
                }
                numbersArray.push(writtenNumber);
                numbersArray.sort();
                numbersArray.forEach(number => {
                    let newOption = new Option(number, undefined);
                    selectorNumber.add(newOption);
                });
            } else {
                alert("numero ya anadido")
            }
    }
    textAreaInput.value = numbersArray;
    })


clickAGetResultButton.addEventListener('click',() =>{
    let evenArray = numbersArray.filter(number => number % 2 == 0);
    let evenResult = evenArray.reduce(function(acc, v) {
        return acc + v;
    }
)
    console.log(evenArray);
    console.log(evenResult);  
    
    let OddArray = numbersArray.filter(number => number % 2 != 0);
    let OddResult = OddArray.reduce(function(acc, v) {
        return acc + v;
    }
)
    console.log(OddArray);
    console.log(OddResult);  

    const difference = function(a,b){
        return a - b;
    }
    textAreaResultInput.value = difference(evenResult,OddResult);
})

deleteButton.addEventListener('click',() =>{
    let i = selectorNumber.selectedIndex;
    selectorNumber.remove(selectorNumber.selectedIndex);
    numbersArray.splice(i,1);
    textAreaInput.value = numbersArray;

})



