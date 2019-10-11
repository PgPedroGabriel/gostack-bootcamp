/* eslint-disable no-param-reassign */
import produce from 'immer';

export default function cart(currentState = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'SUB_TO_CART':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount -= 1;

          if (draft[productIndex].amount === 0) {
            draft = draft.splice(productIndex, 1);
          }
        }
      });
    case 'REMOVE_FROM_CART':
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
