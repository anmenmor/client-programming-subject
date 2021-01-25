const list = [];
$('input').keyup(e => {
    if (e.key === 'Enter'){
        const value = $('input').val();
        $('ol').append('<p>' + value+ '</p>');
        list.push(value);
        sessionStorage.setItem("sentences",JSON.stringify(list));
        console.log(JSON.parse(sessionStorage.getItem("sentences")))
    }
})