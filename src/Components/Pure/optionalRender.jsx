import React, { useState } from "react";

let red = 20;
let green = 150;
let blue = 150;

const loggedStyle = {
	backgroundColor: `rgb(${red}, ${green}, ${blue})`,
	color: "dark",
};

const unloggedStyle = {
	backgroundColor: "tomato",
	color: "white",
};

// Login / Logout buttons

const LoginButton = ({ loginActions, propStyle }) => {
	return (
		<button
			style={propStyle}
			className="btn btn-primary"
			onClick={loginActions}
		>
			Login
		</button>
	);
};

const LogoutButton = ({ logoutActions, propStyle }) => {
	return (
		<button
			style={propStyle}
			className="btn btn-primary"
			onClick={logoutActions}
		>
			Logout
		</button>
	);
};

// (Expression true) && expresion => se rederiza la expresión
// (Expression false) && expresion => no rederiza la expresión

const OptionalRender = () => {
	const [access, setAccess] = useState(false);
	const [nMessages, setNMessages] = useState(0);

	// const updateAcees = () => {
	//     setAccess(!access)
	// }

	const loginAction = () => {
		setAccess(true);
	};

	const logoutAction = () => {
		setAccess(false);
	};

	let optionalButton;

	// if(access){
	//     optionalButton = <button className='btn btn-primary' onClick={updateAcees}>Logout</button>
	// } else{
	//     optionalButton = <button className='btn btn-primary' onClick={updateAcees}>Login</button>
	// }

	if (access) {
		optionalButton = (
			<LogoutButton propStyle={unloggedStyle} logoutActions={logoutAction} />
		);
	} else {
		optionalButton = (
			<LoginButton propStyle={loggedStyle} loginActions={loginAction} />
		);
	}

	// Unread messages
	let addMessages = () => {
		setNMessages(nMessages + 1);
	};

	return (
		<div>
			{/* Optional Button */}
			{optionalButton}
			{/* NMessgaes unread */}
			{/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p> } 
           { nMessages > 1 && <p>You have {nMessages} new messages...</p> } 
           { nMessages === 0 && <p>There are no new messages</p> } */}
			{/* Operador ternario */}
			{access ? (
				<div>
					{nMessages > 0 ? (
						<p>
							You have {nMessages} new message
							{nMessages > 1 ? "s" : null}...
						</p>
					) : (
						<p>There are no new messages</p>
					)}
					<button className="btn btn-secondary" onClick={addMessages}>
						{nMessages === 0
							? "Add your first message"
							: "Add new messages"}
					</button>
				</div>
			) : null}
		</div>
	);
};

export default OptionalRender;
