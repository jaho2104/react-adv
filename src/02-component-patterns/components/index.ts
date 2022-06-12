import { default as ProductCardBase } from "./ProductCard";
import ProductButtons from "./ProductButtons";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";

export { default as ProductButtons } from "./ProductButtons";
export { default as ProductImage } from "./ProductImage";
export { default as ProductTitle } from "./ProductTitle";

const ProductCard = Object.assign(ProductCardBase, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
