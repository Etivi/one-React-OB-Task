import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import "../../styles/task.scss";

const ContactComponent = ({ contact, conected, remove }) => {
	function contactConenctIcon() {
		if (contact.conected)
			return (
				<span>
					<i
                        onClick={()=> conected(contact)}
						className="bi bi-record-fill task-action"
						style={{ color: "green" }}
					></i>
					<span style={{ color: "black" }}>Contacto en línea</span>
				</span>
			);
		else
			return (
				<span>
					<i
                        onClick={()=> conected(contact)}
						className="bi bi-record-fill task-action"
						style={{ color: "red" }}
					></i>
					<span style={{ color: "black" }}>Contacto desconectado</span>
				</span>
			);
	}

	return (
		<div className="">
			<div className="card" style={{ width: "300px", height: '150px' }}>
				<div className="card-body">
					<i
						onClick={()=> remove(contact)}
						className="bi bi-trash fs-3 task-action float-end"
						style={{ color: "tomato", fontWeight: "bold" }}
					></i>
					<h5 className="card-title">
						Name: {contact.name} {contact.lastName}
					</h5>
					<p className="card-text">Email: {contact.email}</p>
					<h5>
						{contactConenctIcon()}
					</h5>
				</div>
			</div>
		</div>
	);
};

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact).isRequired,
	conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ContactComponent;
