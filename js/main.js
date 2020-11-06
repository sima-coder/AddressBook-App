'use strict';

/*******************************************************************************************/
/************************************* CODE PRINCIPAL **************************************/
/*******************************************************************************************/

$(function() {
    $('#add-contact').on('click', onClickAddContact);
    $('#save-contact').on('click', onClickSaveContact);
    $('#clear-address-book').on('click', onClickClearAddressBook);
    $(document).on('click', '#address-book a', onClickShowContactDetails);

    $('#contact-details a').on('click', onClickEditContact);
    
    refreshAddressBook();
    
});