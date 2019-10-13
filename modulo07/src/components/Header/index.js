import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const cartSize = useSelector(state => state.cart.length);

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

export default Header;
