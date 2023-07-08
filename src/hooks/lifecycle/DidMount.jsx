/* 
    Ejemplo de uso del método del ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional
*/

import React, { useEffect } from "react";

export const DidMountHook = () => {
	useEffect(() => {
		console.log(
			"Comportamiento antes de que el componente sea añadido al DOM (rederice)"
		);
	}, []);

	return (
    <div>
        <h1>
            DidMount
        </h1>   
    </div>
    )
};
