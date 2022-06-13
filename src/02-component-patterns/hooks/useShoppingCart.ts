import { useState } from "react";

import { OnCountChangeArgs, ShoppingCart } from "../types";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({ count, product }: OnCountChangeArgs) => {
    setShoppingCart((prevShoppingCart) => {
      const productInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: productToDelete, ...newShoppingCart } =
        prevShoppingCart;

      return newShoppingCart;
    });
  };

  return { shoppingCart, onProductCountChange };
};

export default useShoppingCart;
