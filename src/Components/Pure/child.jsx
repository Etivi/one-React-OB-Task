import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
	const messageRef = useRef("");
	const nameRef = useRef("");

	function pressButton() {
		const text = messageRef.current.value;
		alert(`Text in Inpunt: ${text}`);
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`);
	}

	function submitName(e) {
		e.preventDefault();
        update(nameRef.current.value)
	}

	return (
		<div style={{ background: "cyan", padding: "30px" }}>
			<p onMouseOver={() => console.log("On Mouse Over")}>
				Hello, {name}
			</p>
			<button onClick={() => console.log("Botón 1 pulsado")}>Botón 1</button>
			<button onClick={pressButton}>Botón 2</button>
			<button onClick={() => pressButtonParams("Hello")}>Botón 3</button>
			<input
				placeholder="Sen a text to your Father"
				onFocus={() => console.log("Inpunt Focosed")}
				onChange={(e) => console.log("Input Changed:", e.target.value)}
				onCopy={() => console.log("Copied text from Input")}
				ref={messageRef}
			/>
			<button onClick={() => send(messageRef.current.value)}>
				Send Message
			</button>
			<div style={{ marginTop: "20px" }}>
				<form onSubmit={submitName}>
					<input ref={nameRef} placeholder="New Name" />
					<button type="submit">Update Name</button>
				</form>
			</div>
		</div>
	);
};

export default Child;
