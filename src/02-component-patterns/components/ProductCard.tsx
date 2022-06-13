import { createContext, FC, PropsWithChildren } from "react";
import useProduct from "../hooks/useProduct";

import { ControlProps, Product, SharedProps } from "../types";
import styles from "../styles/styles.module.css";

type ProductContextProps = {
  count: number;
  product: Product;
  increaseBy: (amount: number) => void;
};

type ProductCardProps = PropsWithChildren<
  ControlProps<
    SharedProps<{
      product: Product;
    }>
  >
>;

export const ProductContext = createContext({} as ProductContextProps);
const { Provider: ProductCardProvider } = ProductContext;

const ProductCard: FC<ProductCardProps> = ({
  children,
  className,
  product,
  style,
  value,
  onCountChange,
}) => {
  const { count, increaseBy } = useProduct({ product, value, onCountChange });

  return (
    <ProductCardProvider value={{ count, product, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductCardProvider>
  );
};

export default ProductCard;
