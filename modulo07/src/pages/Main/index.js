import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { ProductList, Alert } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/Cart/actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showAlert: false,
    };

    this.isDidMounted = true;
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));
    if (this.isDidMounted) {
      this.setState({ products: data });
    }
  }

  componentWillUnmount() {
    this.isDidMounted = false;
  }

  addToCart = product => {
    const { addToCartRequest } = this.props;

    addToCartRequest(product.id);
    /*
    this.setState({ showAlert: true });
    setTimeout(() => {
      if (this.isDidMounted) {
        this.setState({ showAlert: false });
      }
    }, 1500);
    window.scrollTo(0, 0);
    */
  };

  render() {
    const { products, showAlert } = this.state;
    const { amount } = this.props;
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
                  <MdAddShoppingCart size={16} color="#fff" />
                  {amount[product.id] || 0}
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
  addToCartRequest: PropTypes.func,
  amount: PropTypes.shape({}),
};

Main.defaultProps = {
  addToCartRequest: () => {},
  amount: {},
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    // eslint-disable-next-line no-param-reassign
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
