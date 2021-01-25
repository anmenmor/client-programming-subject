export const emailInput = $('#email');
export const messageElement = $('#errorMessage');
export const loginViewElement = $('#loginView');
export const titleInput = $('#title');
export const sinopsisInput = $('#sinopsis');
export const addButton = $('#addButton');
export const ul = $('#filmList');

export const itemHTML = `
    <li id=$$LI_ID$$>
        <div>
        <p>$$ITEM_NAME$$</p>
        <a class="waves-effect waves-light btn-small deep-orange darken-3">delete</a>
        <a class="waves-effect waves-light btn-small blue darken-1">informacion</a>
        </div>
    </li>
`;