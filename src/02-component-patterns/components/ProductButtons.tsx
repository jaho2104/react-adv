import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import { ProductButtonsProps } from "../types";

const ProductButtons: FC<ProductButtonsProps> = ({ className, style }) => {
  const { count, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        {" "}
        -{" "}
      </button>
      <div className={styles.countLabel}> {count} </div>
      <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ProductButtons;
