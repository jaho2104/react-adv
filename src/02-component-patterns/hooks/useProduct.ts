import { useEffect, useRef, useState } from "react";

import { OnCountChangeArgs, Product } from "../types";

type UseProductArgs = {
  product: Product;
  value?: number;
  onCountChange?: (args: OnCountChangeArgs) => void;
};

const useProduct = ({ onCountChange, product, value = 0 }: UseProductArgs) => {
  const [count, setCount] = useState(value);
  const isControlled = useRef(!!onCountChange);

  const increaseBy = (amount: number) => {
    if (isControlled.current) {
      return onCountChange!({ count: amount, product });
    }

    const newCount = Math.max(count + amount, 0);

    setCount(newCount);
    onCountChange?.({ count: newCount, product });
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return { count, increaseBy };
};

export default useProduct;
