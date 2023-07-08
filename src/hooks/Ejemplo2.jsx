/* 
    Ejemplo de uso de:
    - useState()
    - useRef()
    - useEffect()
*/

import React, {useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distitos cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referecia con useRef() para asociar una variable con un elemento del DOM del comoponente (vista HTML)
    const miREf = useRef()

    function incrementarContador1(){
        setContador1(contador1 + 1)
    }

    function incrementarContador2(){
        setContador2(contador1 + 1)
    }

    /* 
        Trabajando con useEffect
    */

    /* 
        Caso 1: Ejecutar SIEMPRE un snippet de código
        Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
    */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando Referencia a elemento del DOM')
    //     console.log(miREf)
    // })

    /* 
        Caso 2: Ejecutar solo cambio el contador 1
        Cada vez cuando hay un cambio en el contador 1 , se ejecuta lo que diga el useEffect()
        En caso de que cambie contador 2. no habra ejecución
    */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1')
    //     console.log('Mostrando Referencia a elemento del DOM')
    //     console.log(miREf)
    // }, [contador1]);

     /* 
        Caso 3: Ejecutar solo cambio el contador 1 o contador 2
        Cada vez cuando hay un cambio en el contador 1 , se ejecuta lo que diga el useEffect()
        Cada vez cuando hay un cambio en el contador 2 , se ejecuta lo que diga el useEffect()
    */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2')
        console.log('Mostrando Referencia a elemento del DOM')
        console.log(miREf)
    }, [contador1, contador2]);

  return (
    <div>
        <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
        <h2>CONTADOR 1: {contador1} </h2>
        <h2>CONTADOR 2: {contador2} </h2>
        {/* Elemento referenciado */}
        <h4 ref={miREf}>
            Ejemplo de elemento referenciado
        </h4>
        <button onClick={incrementarContador1} >Incrementar Contador 1</button>
        <button onClick={incrementarContador2} >Incrementar Contador 2</button>
    </div>
  )
}

export default Ejemplo2;
