export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: '@cart/REMOVE',
    product,
  };
}

export function subToCart(product) {
  return {
    type: '@cart/SUB_AMOUNT',
    product,
  };
}

export function addAmountToCart(id) {
  return {
    type: '@cart/ADD_AMOUNT',
    id,
  };
}
