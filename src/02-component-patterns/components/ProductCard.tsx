import { createContext, FC } from "react";
import useProduct from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../types";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider: ProductCardProvider } = ProductContext;

const ProductCard: FC<ProductCardProps> = ({
  children,
  product,
  className,
  style,
}) => {
  const { count, increaseBy } = useProduct();

  return (
    <ProductCardProvider value={{ count, product, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductCardProvider>
  );
};

export default ProductCard;
