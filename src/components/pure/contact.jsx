import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
    return(
        <div>
            <h2>
                Nombre :{ contact.name }
            </h2>
            <h3>
                LastName: { contact.lastName }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                This user is: {contact.conected ? 'Contacto en Línea':'Contacto No Disponible'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    task : PropTypes.instanceOf(Contact)
};

export default ContactComponent;