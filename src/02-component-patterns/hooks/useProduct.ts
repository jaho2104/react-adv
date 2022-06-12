import { useState } from "react";

const useProduct = () => {
  const [count, setCount] = useState(0);
  const increaseBy = (amount: number) =>
    setCount((prevCount) => Math.max(prevCount + amount, 0));

  return { count, increaseBy } as const;
};

export default useProduct;
