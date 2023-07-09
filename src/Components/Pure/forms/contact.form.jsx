import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
	const nameRef = useRef("");
	const lastNameRef = useRef("");
	const emailRef = useRef("");

	function addContact(e) {
		e.preventDefault();
		const newContact = new Contact(
			nameRef.current.value,
			lastNameRef.current.value,
			emailRef.current.value,
			false
		);
        add(newContact)
	}

	return (
		<form 
            onSubmit={addContact}
        >
			<div className="form-outline d-flex flex-column gap-2 mt-2">
				<h2 className="text-center">Agregar contacto</h2>
				<input
					placeholder="Name"
					type="text"
					id="inputName"
					ref={nameRef}
					className="form-control form-control-lg"
					required
					autoFocus
				/>
				<input
					placeholder="Lastname"
					type="text"
					id="inputLastName"
					ref={lastNameRef}
					className="form-control form-control-lg"
					required
					autoFocus
				/>
				<input
					placeholder="Email"
					type="email"
					id="inputEmail"
					ref={emailRef}
					className="form-control form-control-lg"
					required
					autoFocus
				/>
				<button type="submit" className="btn btn-success btn-lg ">
					Add
				</button>
			</div>
		</form>
	);
};

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
