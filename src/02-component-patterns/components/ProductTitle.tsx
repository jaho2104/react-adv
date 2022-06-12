import { FC, useContext } from "react";
import { ProductTitleProps } from "../types";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

const ProductTitle: FC<ProductTitleProps> = ({ title }) => {
  const {
    product: { title: titleFromProduct },
  } = useContext(ProductContext);

  const titleToShow = title || titleFromProduct;

  return <span className={styles.productDescription}>{titleToShow}</span>;
};

export default ProductTitle;
