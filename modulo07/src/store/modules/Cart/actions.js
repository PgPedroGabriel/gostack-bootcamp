export function addToCart(product) {
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
    type: '@cart/SUB',
    product,
  };
}
