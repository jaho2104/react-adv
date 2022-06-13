export type SharedProps<AdditionalProps = Record<string, unknown>> = {
  className?: string;
  style?: React.CSSProperties;
} & AdditionalProps;

export type ControlProps<AdditionalProps = Record<string, unknown>> = (
  | {
      value: number;
      onCountChange: (args: OnCountChangeArgs) => void;
    }
  | { value?: never; onCountChange?: never }
) &
  AdditionalProps;

export type Product = {
  id: string;
  img?: string;
  title: string;
};

type ProductInCart = Product & { count: number };

export type ShoppingCart = {
  [key: string]: ProductInCart;
};

export type OnCountChangeArgs = {
  count: number;
  product: Product;
};
