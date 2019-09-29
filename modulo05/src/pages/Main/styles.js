import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 25px;
  color: ${props => (props.error ? 'red' : '#fff')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 15px;
    color: #ccc;
  }
`;
