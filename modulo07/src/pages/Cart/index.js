import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/Cart/actions';
import { formatPrice } from '../../util/format';

class Cart extends Component {
  dispatcherHandler(eventName, product) {
    const { addToCart, removeFromCart, subToCart } = this.props;

    if (eventName === 'ADD') {
      addToCart(product);
    }

    if (eventName === 'SUB') {
      subToCart(product);
    }

    if (eventName === 'REMOVE') {
      removeFromCart(product);
    }
  }

  render() {
    const { products, total } = this.props;

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
                  <strong>{product.title}</strong>
                  <span>{product.priceFormated}</span>
                </td>

                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        this.dispatcherHandler('SUB', product);
                      }}
                    >
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>

                    <input type="number" readOnly value={product.amount} />

                    <button
                      type="button"
                      onClick={() => {
                        this.dispatcherHandler('ADD', product);
                      }}
                    >
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>

                <td>
                  <strong>{product.subTotal}</strong>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => {
                      this.dispatcherHandler('REMOVE', product);
                    }}
                  >
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
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      price: PropTypes.number,
      priceFormated: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  subToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  addToCart: PropTypes.func,
  total: PropTypes.string,
};

Cart.defaultProps = {
  products: [
    {
      id: 1,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      price: 179.9,
      priceFormated: 'R$ 179,90',
      title: 'Tênis de Caminhada Leve Confortável',
    },
  ],
  subToCart: () => {},
  removeFromCart: () => {},
  addToCart: () => {},
  total: '',
};

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
