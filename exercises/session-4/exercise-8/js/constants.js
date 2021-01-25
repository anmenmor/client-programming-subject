const addBtn = document.getElementById('addBtn');
const ul = document.querySelector('ul');
const item = document.getElementById('item');
const listName = document.getElementById('listName');
//const saveBtn = document.getElementById('saveBtn');
const getBtn = document.getElementById('getBtn');

const regex = /^[A-Z]{1}[a-zA-Z0-9 ]*$/;

const itemHTML = `
    <li class="collection-item">
        <div class="valign-wrapper row no-margin-y">
        <p class="col s10 no-margin-y item">$$ITEM_NAME$$</p>
        <div class="col s2 no-margin-y">
        <a class="btn-floating waves-effect waves-light btn-small red remove-btn"><i class="material-icons">delete_forever</i></a>
        </div>
        </div>
    </li>
`;