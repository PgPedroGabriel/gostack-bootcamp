import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      margin-top: 5px;
      line-height: 20px;
      color: #333;
      font-size: 13px;
    }

    > span {
      margin: 5px 0 20px;
      font-size: 21px;
      font-weight: bold;
    }

    button {
      display: flex;
      align-items: center;

      overflow: hidden;
      margin-top: auto;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #7159c1;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
