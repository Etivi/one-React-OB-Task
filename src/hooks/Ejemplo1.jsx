/* 
    Ejemplo de uso del JOok useState

    Crear un componen de tipo función y acceder a su estado privado a través de un hook y, además, poder modificarlo
*/

import React, { useState } from "react";

const Ejemplo1 = () => {
	// valor inicial par aun contador
	const valorInicial = 0;

	// Valor inicial para una persona
	const personaInicial = {
		nombre: "Martin",
		email: "ceo@etivi.com",
	};

	/* 
        Queremos que el VALORINICIAL y PERSONALINICIAL sean parte del estado del componente para así poder gestionar su cmabio y que éste se vea refejado en la vista del componente.

        const [nombreVariablem fucnionParaCambiar] = useState(valorInicial)
    */

	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/* 
        Función para actualizar el estado privado qeu contiene el contador
    */
	function incrementarContador() {
		// funcionParaCambiar(nuevoValor)
		setContador(contador + 1);
	}

	/* 
        Función para actualizar el estado de persona en el componente
    */
	function actualizarPersona(nombre) {
		setPersona({
			nombre: "Pepe",
			email: "pepe@gmail.com",
		});
	}

	return (
		<div>
			<h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre} </h3>
            <h4>EMAIL: {persona.email} </h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
		</div>
	);
};

export default Ejemplo1;
