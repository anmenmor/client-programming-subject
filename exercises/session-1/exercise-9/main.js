const clickButton = document.getElementById("execute");
function calculateDays(maxDate, minDate){
    let differenceInTime = maxDate.getTime() - minDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24); 
    return differenceInDays;
}

document.getElementById("execute").addEventListener("click",()=>{
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let today = new Date();
    let compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(),0,0,0);
    let pageDate = new Date(year,month,day,0,0,0);
    console.log(compareToday);
    console.log(pageDate);
    let show = document.getElementById("textArea");
    
    if (compareToday.getTime() == pageDate.getTime()){
        show.value = "la fecha introducida es hoy";

    }else if(compareToday.getTime() > pageDate.getTime()){
        let differenceDays = calculateDays(compareToday, pageDate);
        show.value = `La fecha es pasada ${differenceDays} días`;

    }else{
        let differenceDays = calculateDays(pageDate, compareToday);
        show.value =`La fecha es futura ${differenceDays} días`;

    }
})