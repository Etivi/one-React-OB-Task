import React from 'react';
import ContactComponent from '../Pure/contact';
import { Contact } from '../../models/contact.class';


const ContactListComponet = () => {

    const defaultContac = new Contact('Carlos', 'Guampe', 'Ceo@etivi.com', false)

    return (
        <div>
            <h1>Contacts: </h1>
            <ContactComponent contact={defaultContac} />
        </div>
    );
};


export default ContactListComponet;
