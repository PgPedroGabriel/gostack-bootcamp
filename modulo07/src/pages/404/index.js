import React from 'react';
// import { Container } from './styles';
import Status from '../../components/Status';

export default function Page404() {
  return (
    <Status code={404}>
      <div>
        <h1>Not found</h1>
      </div>
    </Status>
  );
}
