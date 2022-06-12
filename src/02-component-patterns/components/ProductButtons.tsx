import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

const ProductButtons: FC = () => {
  const { count, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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
