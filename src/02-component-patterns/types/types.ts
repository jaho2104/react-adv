import { CSSProperties, FC, PropsWithChildren } from "react";

type SharedProps<OtherProps = Record<string, unknown>> = {
  className?: string;
  style?: CSSProperties;
} & OtherProps;

export type Product = {
  id: string;
  img?: string;
  title: string;
};

export type ProductButtonsProps = SharedProps;

export type ProductCardChildren = {
  Buttons: FC<ProductButtonsProps>;
  Image: FC<ProductImageProps>;
  Title: FC<ProductTitleProps>;
};

export type ProductCardProps = PropsWithChildren<
  SharedProps<{
    product: Product;
  }>
>;

export type ProductContextProps = {
  count: number;
  product: Product;
  increaseBy: (amount: number) => void;
};

export type ProductImageProps = SharedProps<{
  img?: string;
}>;

export type ProductTitleProps = SharedProps<{
  title?: string;
}>;
