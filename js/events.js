'use strict';

/**
 * Gestionnaires d'événements
 */
function onClickAddContact() {
    $('#contact-details').fadeOut();
    $('#contact-form').trigger("reset");//vider le formulaire
    $('#contact-form').attr('data-mode', 'add').fadeIn('fast');
    //$('#contact-form').data('mode', 'add').fadeIn('slow');
}

function onClickSaveContact(e) {

    e.preventDefault();
    
    if( !$('#title').val() || !$('#firstName').val() || !$('#lastName').val() || !$('#phone').val()) {
        $('.field-error').text('All the form fields must be completed !').fadeIn();
        return false;
    }

    const contact = createContact(
        $('#title').val(), $('#firstName').val(),
        $('#lastName').val(), $('#phone').val()
    );

    let addressBook = loadAddressBook();
    
    const mode = $('#contact-form').attr('data-mode'); // = $('#contact-form').data('mode');
    if (mode == 'add') {
        addressBook.push(contact);
    } else { //en mode edition
        const index = $('#contact-details a').attr('data-index'); // = $('#contact-details a').data('index');
        addressBook[index] = contact;
    }


    saveDataToLocalStorage('address_book', addressBook);

    $('#contact-form').fadeOut('slow');

    refreshAddressBook();
    
}

function onClickClearAddressBook() {
    removeDataFromLocalStorage('address_book');
    refreshAddressBook();
}

function onClickShowContactDetails() {
    const index = $(this).data('index');// const index = $(this).attr('data-index');

    let addressBook = loadAddressBook();
    const contact = addressBook[index];

    $('#contact-details dt').text(contact.title + ' ' + contact.firstName + ' ' + contact.lastName);
    $('#contact-details dd').text('Tel : ' + contact.phone);

    $('#contact-details a').attr('data-index', index);//setAttribute('data-index', index);
    // $('#contact-details a').data('index', index);//.dataset.index = index;

    $('#contact-form').fadeOut('fast');
    $('#contact-details').fadeIn();
}

function onClickEditContact() {

    const index = $(this).attr('data-index');//getAttribute

    let addressBook = loadAddressBook();
    const contact = addressBook[index];

    $('#firstName').val(contact.firstName);
    $('#lastName').val(contact.lastName);
    $('#phone').val(contact.phone);

    switch (contact.title) {
        case 'Mrs':
            $('#title').val(1);
            break;
        case 'Miss':
            $('#title').val(2);
            break;
        case 'Mr.':
            $('#title').val(3);
            break;
    }

    $('#contact-details').hide();
    $('#contact-form').attr('data-mode', 'edit').show();

}