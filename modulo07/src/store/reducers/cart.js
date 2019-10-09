export default function cart(currentState = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...currentState, action.product];
    default:
      return currentState;
  }
}
