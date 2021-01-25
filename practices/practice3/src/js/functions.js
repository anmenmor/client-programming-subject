import { Film } from './Film';
import * as constants from './constants';

let films;

export const isValidEmail = (email) =>{
    return /^[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z]{1,3}$/.test(email);
}

export const displayFilms = (films) => {
    let str = '';
    films.forEach((film, index) => {
        str += constants.itemHTML.replace('$$ITEM_NAME$$', film.title).replace('$$LI_ID$$', index);
    });
    constants.ul.html(str);
}

export const validateAccess = e => {
    constants.messageElement.hide();
    if(e.key === 'Enter'){      
        const email = constants.emailInput.val();
        if (isValidEmail(email)) {
            constants.loginViewElement.show();
            sessionStorage.setItem("emails",email);
            films = JSON.parse(localStorage.getItem("films")|| "[]");
            displayFilms(films);
        } else {
            constants.loginViewElement.hide();
            constants.messageElement.css('color','red');
            constants.messageElement.show();
        }
    }
}

export const addNewFilms = e => {
    e.preventDefault();
    const title = constants.titleInput.val();
    const sinopsis = constants.sinopsisInput.val();
    let film = new Film(title, sinopsis);
    films.push(film);
    localStorage.setItem("films",JSON.stringify(films));
    const replacedItemHTML = constants.itemHTML.replace('$$ITEM_NAME$$', film.title).replace('$$LI_ID$$', films.length - 1);
    constants.ul.append(replacedItemHTML);
}

export const filmAction = e => {
    if (e.target.matches('.waves-effect.waves-light.btn-small.deep-orange.darken-3')) {
        films.splice($(e.target).closest('li')[0].id, 1);
        $(e.target).closest('li').remove();
        localStorage.setItem("films",JSON.stringify(films));
        displayFilms(films);
    } else if (e.target.matches('.waves-effect.waves-light.btn-small.blue.darken-1')) {
        Swal.fire(films[$(e.target).closest('li')[0].id].sinopsis);
    }
}