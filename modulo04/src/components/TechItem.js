import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Deletar</button>
    </li>
  )
}

export default TechItem;