const userInput1 = document.getElementById('word1');
const userInput2 = document.getElementById('word2');
const userInput3 = document.getElementById('word3');

const clickButton =document.getElementById('combine').addEventListener('click',() =>{

    const text1 = userInput1.value;
    const text2 = userInput2.value;
    const text3 = userInput3.value;

    let textResult = "";

    for(let i = 0; i < text1.length; i++){
        for(let j = 0; j < text2.length; j++){
            for(let k = 0; k < text3.length; k++){
                textResult += `${text1[i]}-${text2[j]}-${text3[k]}\n`; 
            }
        }
    }

    const textAreaInput = document.getElementById('result');
    textAreaInput.value = textResult;
})


