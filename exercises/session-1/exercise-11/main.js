
document.getElementById("execute").addEventListener("click",()=>{
let value = document.getElementById("name").value;
document.cookie = `name=${value};path=/;`;

console.log(`cookie: ${document.cookie}`);
})