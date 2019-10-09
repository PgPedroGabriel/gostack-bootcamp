import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

const Header = ({ cartSize }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
};

Header.propTypes = {
  cartSize: PropTypes.number,
};

Header.defaultProps = {
  cartSize: 0,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
