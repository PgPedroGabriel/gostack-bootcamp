import React, { useState, useEffect, useMemo, useCallback } from 'react';

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

  // useCallback é como se fosse um usememo, mas ele serve para funções
  // se você definir uma function dentro do component, toda vez que o component
  // for montado ou criado, a function vai ser sempre recriada, alterando qualquer
  // estado, por exemplo, adicionando um item na lista
  // So utilizamos essas funções quando usamos as variaveis/estados do component
  const handleAdd = useCallback(() => {
    setLista([...lista, 'PHP']);
  }, [lista]);

  return (
    <>
      <ul>
        {lista.map(l => {
          return <li key={l}>{l}</li>;
        })}
        <strong>Você tem {listaSize} items na sua lista</strong>
        <button type="button" onClick={handleAdd}>
          Adicionar php
        </button>
      </ul>
    </>
  );
}
