'use strict';

/**
 * Fonctions spécifiques au projet Carnet d'adresses (hors gestionnaires d'événements)
 */
function createContact(title, firstName, lastName, phone) {
    const contact = new Object(); //ou bien
    // const contact = {};
    
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.phone = phone;

    switch (title) {
        case '1':
            contact.title = 'Mrs';
            break;
    
        case '2':
            contact.title = 'Miss';
            break;
    
        case '3':
            contact.title = 'Mr.';
            break;
    }

    return contact;
}

function loadAddressBook() {
    let addressBook = loadDataFromLocalStorage('address_book');

    if(addressBook == null) {
        addressBook = new Array();
    }

    return addressBook;
}

function refreshAddressBook() {
    let addressBook = loadAddressBook();

    let addressBookList = $('<ul>').addClass('list-unstyled');//document.createElement('ul').classList.add('list-unstyled')

    for(let index = 0; index < addressBook.length; index++) {

        let hyperlink = $('<a>')
            .attr('href', '#contact-details')//setAttribute(,)
            .attr('data-index', index)//setAttribute(data-index,index) // dataset('index', index)
            .text(addressBook[index].firstName + ' ' + addressBook[index].lastName)//textContent
            .prepend($('<i>').addClass('far fa-user').attr('aria-hidden', 'true'));//prependChild

        addressBookList.append($('<li>').append(hyperlink));
    }

    if (addressBook.length > 0) {
        $('#address-book').html(addressBookList).addClass('bg-light');
        // ou bien
        // $('#address-book').empty().append(addressBookList);
    } else {
        $('#address-book').html($('<p>').text('No contact saved'));
    }

}