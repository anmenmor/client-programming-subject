const userNumber1 = document.getElementById('base');
const userNumber2 = document.getElementById('heigth');
const showArea = document.getElementById('showArea');
const showPerimeter = document.getElementById('showPerimeter');
const showDiagoanl = document.getElementById('showDiagonal');
let rectangle;

document.getElementById('create').addEventListener("click",()=>{
    base = userNumber1.value;
    altura = userNumber2.value;
    console.log(base);
    console.log(altura);
    if(base === '' || altura === ''){
        alert("Hay algun campo vacio")
    }else{
        rectangle = new Rectangle({base: base, altura: altura});
    }
})

document.getElementById('area').addEventListener("click",()=>{
    showArea.innerHTML = rectangle.calcArea();
})

document.getElementById('perimeter').addEventListener("click",()=>{
    showPerimeter.innerHTML = rectangle.calcPerimeter();
})

document.getElementById('diagonal').addEventListener("click",()=>{
    showDiagoanl.innerHTML = rectangle.calcDiagonal();
})