const element = document.querySelectorAll('p');
element.forEach(cur =>{
    if (!cur.classList.contains('noColor')){
        cur.style = 'color: green'; 
    }
    console.log(cur)
} )
   