import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/Cart/actions';
import { formatPrice } from '../../util/format';

function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

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
                      dispatch(CartActions.subToCart(product));
                    }}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button
                    type="button"
                    onClick={() => {
                      dispatch(CartActions.addToCartRequest(product.id));
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
                    dispatch(CartActions.removeFromCart(product));
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

export default Cart;
