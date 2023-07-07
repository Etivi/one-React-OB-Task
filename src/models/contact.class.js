export class Contact {
	name = "";
	lastName = "";
	email = "";
	conected = true;

	constructor(name, description, completed, conected) {
		this.name = name;
		this.lastName = description;
		this.email = completed;
		this.conected = conected;
	}
}
