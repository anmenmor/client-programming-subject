listName.addEventListener('keyup', checkListName);

[`mouseenter`, `mouseleave`].forEach(e => {
    listName.addEventListener(e, () => changeBackgroundColor(listName));
    item.addEventListener(e, () => changeBackgroundColor(item));
});

addBtn.addEventListener('click', addItem);

ul.addEventListener('click', removeItem);

saveBtn.addEventListener('click', saveList);

//getBtn.addEventListener('click', getList);

document.addEventListener("DOMContentLoaded", getList);