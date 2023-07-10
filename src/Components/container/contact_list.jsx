import React, { useState } from "react";
import ContactComponent from "../Pure/contact";
import { Contact } from "../../models/contact.class";
import ContactForm from "../Pure/forms/contact.form";

const ContactListComponet = () => {
	const defaultContac1 = new Contact(
		"Carlos",
		"Guampe",
		"ceo@etivi.com",
		true
	);
	const defaultContac2 = new Contact(
		"Andres",
		"Gutierrez",
		"andrea@gmail.com",
		false
	);
	const defaultContac3 = new Contact(
		"Camila",
		"Lozano",
		"camilita@hotmail.com",
		true
	);

	const [contacts, setContacts] = useState([
		defaultContac1,
		defaultContac2,
		defaultContac3,
	]);

	function stateConenctContact(contact) {
		console.log("Estado del usuario:", contact);
		const index = contacts.indexOf(contact);
		const tempContact = [...contacts];
		tempContact[index].conected = !tempContact[index].conected;
		setContacts(tempContact);
	}

	function removeContact(contact) {
		console.log("Delete this Contact:", contact);
		const index = contacts.indexOf(contact);
		const tempContact = [...contacts];
		tempContact.splice(index, 1);
		setContacts(tempContact);
	}

	function addContact(contact) {
		console.log("Add this contact", contact);
		// const index = contacts.indexOf(contact);
		const tempContact = [...contacts];
		tempContact.push(contact);
		setContacts(tempContact);
	}

	return (
		<div className="container-fluid">
			<div className="d-flex gap-2 flex-wrap justify-content-center">
				{contacts.map((contact, index) => {
					return (
						<ContactComponent
							key={index}
							contact={contact}
							conected={stateConenctContact}
							remove={removeContact}
						/>
					);
				})}
			</div>
			<div className="row">
				<ContactForm add={addContact} />
			</div>
		</div>
	);
};

export default ContactListComponet;
