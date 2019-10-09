import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th>&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>

                <td>
                  <strong>{product.price}</strong>
                  <span>{product.priceFormatted}</span>
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
            ))}
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

Cart.propTypes = {
  products: PropTypes.arrayOf,
};

Cart.defaultProps = {
  products: [],
};

export default connect(state => ({
  products: state.cart,
}))(Cart);
