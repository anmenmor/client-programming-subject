const element = document.querySelector('img');
element.addEventListener(`mouseenter`, ()=>
    element.src = 'img2.png')
element.addEventListener('mouseleave', ()=>
    element.src = 'img1.png')    