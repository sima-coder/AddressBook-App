'use strict';

/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/
function saveDataToLocalStorage(name, data) {
    const jsonData = JSON.stringify(data);//string
    localStorage.setItem(name, jsonData);
}

function loadDataFromLocalStorage(name) {
    const jsonData = localStorage.getItem(name);//string
    return JSON.parse(jsonData);//array of objects
}

function removeDataFromLocalStorage(name) {
    localStorage.removeItem(name);
}