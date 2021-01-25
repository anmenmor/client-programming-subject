import * as Functions from './functions';
import  * as constants from './constants';

constants.emailInput.on("keyup", Functions.validateAccess);
constants.addButton.on("click", Functions.addNewFilms);
constants.ul.on("click", Functions.filmAction);
