/* 
    Ejemplo de uso del método componentWillUnMount para componente funcional
*/

import React, { useEffect } from "react";

export const WillUnMountHook = () => {
	useEffect(() => {
		//aqui no poinemos nada
		return () => {
			console.log("Comportamiento antes de que el componente desaparezca");
		};
	}, []);

	return (
		<div>
			<h1>WillUnMount</h1>
		</div>
	);
};
