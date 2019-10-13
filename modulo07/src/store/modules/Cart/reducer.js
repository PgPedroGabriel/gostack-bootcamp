/* eslint-disable no-param-reassign */
import produce from 'immer';

export default function cart(currentState = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(currentState, draft => {
        draft.push(action.product);
      });
    case '@cart/ADD_AMOUNT':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        }
      });
    case '@cart/SUB_AMOUNT':
      return produce(currentState, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0 && draft[productIndex].amount > 1) {
          draft[productIndex].amount -= 1;
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
