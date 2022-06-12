import { FC, PropsWithChildren } from "react";

export type Product = {
  id: string;
  title: string;
  img?: string;
};

export type ProductImageProps = {
  img?: string;
};

export type ProductTitleProps = {
  title?: string;
};

export type ProductContextProps = {
  count: number;
  product: Product;
  increaseBy: (amount: number) => void;
};

export type ProductCardProps = PropsWithChildren<{
  product: Product;
}>;

export type ProductCardChildren = {
  Image: FC<ProductImageProps>;
  Title: FC<ProductTitleProps>;
  Buttons: FC;
};
