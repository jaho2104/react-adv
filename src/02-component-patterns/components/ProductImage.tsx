import { FC, useContext } from "react";
import { ProductImageProps } from "../types";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpeg";

const ProductImage: FC<ProductImageProps> = ({ img, className, style }) => {
  const {
    product: { img: imgFromProduct },
  } = useContext(ProductContext);

  const imgToShow = img || imgFromProduct || noImage;

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};

export default ProductImage;
