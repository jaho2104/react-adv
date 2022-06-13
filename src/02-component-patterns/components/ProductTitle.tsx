import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";

import { SharedProps } from "../types";
import styles from "../styles/styles.module.css";

type ProductTitleProps = SharedProps<{
  title?: string;
}>;

const ProductTitle: FC<ProductTitleProps> = ({ title, className, style }) => {
  const {
    product: { title: titleFromProduct },
  } = useContext(ProductContext);

  const titleToShow = title || titleFromProduct;

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleToShow}
    </span>
  );
};

export default ProductTitle;
