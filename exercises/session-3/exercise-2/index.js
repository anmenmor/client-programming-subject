const userNumber1 = document.getElementById('accountId');
const userNumber2 = document.getElementById('accountName');
const userNumber3 = document.getElementById('initialAmount');
const resultInput = document.getElementById('result');
const userAmountInput = document.getElementById('userAmount')
let account;
let text = '';

document.getElementById('create').addEventListener("click",()=>{
    let accountId = parseInt(userNumber1.value);
    let accountName = userNumber2.value;
    let initialAmount = parseInt(userNumber3.value);
    alert("algun campo no es correcto")
    account = new Account(accountId, accountName, initialAmount);
    resultInput.value = account.toString();
})

document.getElementById('deposit').addEventListener("click",()=>{
    text += `${account.toString()}\n`;
    let amount = parseInt(userAmountInput.value);
    account.deposit(amount);
    text += `${account.toString()}\n`;
    resultInput.value = text;
})

document.getElementById('draw').addEventListener("click",()=>{
    text += `${account.toString()}\n`;
    let amount = parseInt(userAmountInput.value);
    account.draw(amount);
    text += `${account.toString()}\n`;
    resultInput.value = text;
})


