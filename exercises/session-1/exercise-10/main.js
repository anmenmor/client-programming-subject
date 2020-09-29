let msg = "";
for(let i=100; i<=9999; i++){
    let length = i.toString().length;
    let arr = i.toString().split("");
    let total = 0;
    for(j = length-1; j>=0; j--){
        total = total + Math.pow((arr[j]),length);
    }

    if(total == i){
        msg += `${total}\n`;
    }
}
let show = document.getElementById("textArea");
show.value = msg;