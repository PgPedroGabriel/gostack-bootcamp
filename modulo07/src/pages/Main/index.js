import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import PropTypes from 'prop-types';

import { ProductList, Alert } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      showAlert: false,
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  addToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });

    this.setState({ showAlert: true });
    setTimeout(() => this.setState({ showAlert: false }), 1500);
    window.scrollTo(0, 0);
  };

  render() {
    const { products, showAlert } = this.state;
    return (
      <>
        <Alert display={showAlert.toString()}>
          <strong>Produto adicionado com sucesso!</strong>
        </Alert>
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>
              <button
                type="button"
                onClick={() => {
                  this.addToCart(product);
                }}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#fff" />1
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </ProductList>
      </>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func,
};

Main.defaultProps = {
  dispatch: () => {},
};

export default connect()(Main);
