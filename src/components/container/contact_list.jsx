import React from 'react'
import { Contact, contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Andres', 'Heredia','@gmail', true)

    const changeState = (id) =>{
        console.log('TODO: Cambiar el estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>Your Contacts:</h1>
            </div>
                {/*TODO: Aplicar un for/map para renderizar una lista*/}
                <ContactComponent contact = {defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;