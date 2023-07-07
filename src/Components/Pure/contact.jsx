import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Names: {contact.name} {contact.lastName}
            </h2>
            <h3> Email: {contact.email}</h3>
            <h4>This User is: {contact.conected ? 'Contact online' : 'Contact not available'} </h4>


        </div>
    );
};


ContactComponent.propTypes = {
   Contact : PropTypes.instanceOf(Contact),
};


export default ContactComponent;
