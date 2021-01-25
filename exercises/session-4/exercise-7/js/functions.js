let listNameCorrect = false;

const checkListName = () =>{
    if (regex.test(listName.value)) {
        listNameCorrect = true;
        listName.className = '';
    }
    else {
        listNameCorrect = false;
        listName.className = 'invalid';
    }
};

const changeBackgroundColor = element => {
    if (element.style.cssText === '') element.style.cssText = 'background-color: #A9BCF5';
    else element.style.cssText = '';
};

const addItem = () => {
    const replacedItemHTML = itemHTML.replace('$$ITEM_NAME$$', item.value)
    ul.insertAdjacentHTML('beforeend', replacedItemHTML);
    item.value = '';
};

const removeItem = e => {
    //console.log(e.target);
    if (e.target.matches('.remove-btn, .remove-btn *')) {
        const item = e.target.closest('li');
        item.parentElement.removeChild(item);
        //e.stopPropagation();
    }
};

const saveList = () => {
    const myList = new List(listName.value);
    
    if (listNameCorrect) {
        const items = ul.getElementsByClassName('item');
        /*Array.from(items).forEach(cur => {
            myList.items.push(cur.textContent);
        });*/
        for(let cur of items){
            myList.items.push(cur.textContent);
        }
        const response = myList.save();
        console.log(response)
        if (response.status) alert('The list is correctly saved!');
        else alert(`Error: ${response.error.message}`);
    } else alert('Error: The list name is not correct');
};

const getList = () => {
    const myList = new List();
    const response = myList.get();
    console.log(myList)
    console.log(response)

    if (response.status) {
        listName.value = myList.name;
        let str = '';
        myList.items.forEach(cur => {
            str += itemHTML.replace('$$ITEM_NAME$$', cur);
        });
        ul.innerHTML = str;
        checkListName();
    } else alert(`Error: ${response.error.message}`);
}
