import React, { useState, useEffect } from 'react';

export default function Main() {
  // ON CONST
  // const lista = ['Nodejs', 'ReactJs', 'React Native'];

  // ON USESTATE
  const [lista, setLista] = useState([]);

  // COMPONENT DID MOUNT
  useEffect(() => {
    setLista(['Nodejs', 'ReactJs', 'React Native']);
  }, []);

  return (
    <>
      <ul>
        {lista.map(l => {
          return <li key={l}>{l}</li>;
        })}
      </ul>
    </>
  );
}
