import React, { Component } from 'react';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img
                  src="https://a1.vnda.com.br/cristofoli/2019/02/25/12001-02-sapato-social-de-couro-cristofoli-preto-2201.jpg?1551053903"
                  alt="Produto 1"
                />
              </td>

              <td>
                <strong>Produto 1</strong>
                <span>R$ 150,00</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() => {}}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={1} />

                  <button type="button" onClick={() => {}}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>

              <td>
                <strong>R$ 150,00</strong>
              </td>

              <td>
                <button type="button" onClick={() => {}}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>Total</span>
            <strong>R$ 150,00</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
