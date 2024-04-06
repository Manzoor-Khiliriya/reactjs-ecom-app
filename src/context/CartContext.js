import { createContext } from "react";

var initialparams = {
  cartProducts: [],
  onAddToCart: (product) => { }
}

const CartContext = createContext(initialparams)

export default CartContext;