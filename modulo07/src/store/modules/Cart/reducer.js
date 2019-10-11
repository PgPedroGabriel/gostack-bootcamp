/* eslint-disable no-param-reassign */
import produce from 'immer';
import { formatPrice } from '../../../util/format';

export default function cart(currentState = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
          draft[productIndex].subTotal = formatPrice(
            draft[productIndex].price * draft[productIndex].amount
          );
        } else {
          draft.push({
            ...action.product,
            amount: 1,
            priceFormated: formatPrice(action.product.price),
            subTotal: action.product.priceFormated,
          });
        }
      });
    case '@cart/SUB':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount -= 1;
          draft[productIndex].subTotal = formatPrice(
            draft[productIndex].price * draft[productIndex].amount
          );

          if (draft[productIndex].amount === 0) {
            draft = draft.splice(productIndex, 1);
          }
        }
      });
    case '@cart/REMOVE':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft = draft.splice(productIndex, 1);
        }
      });
    default:
      return currentState;
  }
}
