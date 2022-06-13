import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";

import { SharedProps } from "../types";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpeg";

type ProductImageProps = SharedProps<{
  img?: string;
}>;

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
