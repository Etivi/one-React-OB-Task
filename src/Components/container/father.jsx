import React, { useState } from 'react';
import Child from '../Pure/child';

const Father = () => {

    const [name, setName] = useState('Martín');

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
