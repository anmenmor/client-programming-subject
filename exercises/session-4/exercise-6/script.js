const text = document.getElementsByTagName('input');
const list = [];

text[0].addEventListener('keypress', (e)=> {
    if(e.key === 'Enter'){
        const li = document.createElement('li');
        li.textContent = text[0].value;
        const ol = document.getElementsByTagName('ol')
        ol[0].insertAdjacentElement('beforeEnd', li);
        list.push(text[0].value);
        sessionStorage.setItem("sentences",JSON.stringify(list));
        console.log(JSON.parse(sessionStorage.getItem("sentences")))
        
    }
}   
)   