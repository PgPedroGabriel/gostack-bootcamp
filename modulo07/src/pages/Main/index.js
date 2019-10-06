import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default class Main extends Component {
  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://a1.vnda.com.br/cristofoli/2019/02/25/12001-02-sapato-social-de-couro-cristofoli-preto-2201.jpg?1551053903"
            alt="produto"
          />
          <strong>Produto 1</strong>
          <span>R$ 150,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />1
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
