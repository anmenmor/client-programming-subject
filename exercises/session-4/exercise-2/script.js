const text = document.querySelectorAll('p');
text.forEach(cur =>
    cur.addEventListener('dblclick', () => {
        if(cur.classList.contains('highligth')){
            cur.classList.remove('highligth')
        } else {
            cur.classList.add('highligth')
        }
    }
))

