export function addToCart(id) {
  return {
    type: '@cart/ADD',
    id,
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
