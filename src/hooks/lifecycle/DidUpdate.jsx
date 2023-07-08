/* 
    Ejemplo de uso de método componenteDidUpdate y uso de hook en componente funcional
*/

import React, {useEffect} from 'react';

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log(' Comportamiento cuando el componente recibe nuevos props o camio en su estado')
    },);

    
    return (
        <div>
            <h1>
                DidUpdate
            </h1>
        </div>
    );
};


