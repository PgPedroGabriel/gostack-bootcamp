import React, { useState, useEffect, useMemo } from 'react';

export default function Main() {
  // ON CONST
  // const lista = ['Nodejs', 'ReactJs', 'React Native'];

  // ON USESTATE
  const [lista, setLista] = useState([]);

  // COMPONENT DID MOUNT
  useEffect(() => {
    setLista(['Nodejs', 'ReactJs', 'React Native']);

    // COMPONENT WILL UNMOUNT
    return () => {
      console.log('unmounting');
    };
  }, []);

  // COMPONENT WILL UPDATE
  useEffect(() => {
    console.log(lista);
    console.log('lista changed');
  }, [lista]);

  // USE MEMO, serve para cálculos de funções que não podem ser chamadas
  // na renderização do component, exemplo lista.length
  const listaSize = useMemo(() => lista.length, [lista]);

  return (
    <>
      <ul>
        {lista.map(l => {
          return <li key={l}>{l}</li>;
        })}
        <strong>Você tem {listaSize} items na sua lista</strong>
      </ul>
    </>
  );
}
